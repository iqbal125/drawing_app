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

describe("DELETE API drawings  /api/drawing", () => {
  it("delete drawing with id", async () => {
    const user = await createUser("test3www", "teswww33@yahoo.com", "password")

    let drawing = await createDrawing("dshfd446443-095t8i", user.id, "test_user", false, 33, "2022-08-11T15:43:27.190Z")

    let res = await request.delete("/api/drawing").query({
      drawing_id: drawing.id,
    })

    expect(res.status).toEqual(200)
  })
})

describe("POST API drawings", () => {
  it("create new drawing", async () => {
    const user = await createUser("test333", "tes3333@yahoo.com", "password")
    const exampleToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZTU3MDQwYjAtMDUzNy00YzgzLWI3N2UtN2U2MjUyZjEzMjg1IiwiaWF0IjoxNjYwMTgxNDAyLCJleHAiOjE2NjA3ODYyMDJ9.Ukb10HXrHNHaHOcMu2RXdBz4VNbPVmKqvewdSldVz8I"

    let res = await request.post("/api/drawing").send({
      dataURL: "LKdghrghndo;lhgljfdgklaghdfhl;k",
      user_id: user.id,
      isPrivate: false,
      timeToComplete: 55,
      submitedTime: "2022-08-11T15:43:27.190Z",
      author: "test333",
    })

    expect(res.status).toEqual(200)
  })
})
