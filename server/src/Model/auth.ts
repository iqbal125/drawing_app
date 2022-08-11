import db from "../Database/db"

export const getUser = async (email: string) => {
  //check if email exists
  let text = `SELECT * FROM users
              WHERE email=$1`

  let values = [email]

  let queryResult = await db.query(text, values)

  return queryResult.rows[0]
}

export const saveUsertoDB = async (email: string, username: string, password: string) => {
  //insert into database
  let text = `INSERT INTO users (username, email, password)
              VALUES($1, $2, $3)
              RETURNING ID`
  let values = [username, email, password]

  let queryResult = await db.query(text, values)

  return queryResult.rows[0]
}
