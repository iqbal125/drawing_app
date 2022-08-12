const supertest = require("supertest")
const server = require("../../../dist/src/app.js").default
let request = supertest(server)
const db = require("../Fixtures/TestDatabase.js")

const createUser = async (email, username, password) => {
  let text = `INSERT INTO users (username, email, password)
              VALUES($1, $2, $3)
              RETURNING id`
  let values = [username, email, password]

  let queryResult = await db.query(text, values)

  return queryResult.rows[0]
}

const createDrawing = async (dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted) => {
  let text = `INSERT INTO drawings(dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted)
              VALUES ($1, $2, $3, $4, $5, $6)
              RETURNING id`

  let values = [dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted]

  let queryResult = await db.query(text, values)

  return queryResult.rows[0]
}

const clearDb = async () => {
  let text1 = `DELETE FROM drawings`
  let text2 = `DELETE FROM users`

  await db.query(text1)
  await db.query(text2)
}

afterEach(() => {
  clearDb()
})

describe("GET drawings /api/drawings", () => {
  it("get drawings", async () => {
    const user = await createUser("test333", "test133ss@yahoo.com", "password")

    await createDrawing("dshfd446443-095t8i", user.id, "test_user", false, 33, "2022-08-11T15:43:27.190Z")

    let res = await request.get(`/api/drawings`)
    expect(res.status).toEqual(200)
  })
})
