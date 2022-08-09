import db from "../Database/db.js"

export const postDrawingModel = async (dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted) => {
  let text = `INSERT INTO drawings(dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted)
              VALUES ($1, $2, $3, $4, $5, $6)`

  let values = [dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted]

  await db.query(text, values)

  return
}

export const getDrawingsModel = async () => {
  let text = `SELECT * FROM drawings`

  let queryResult = await db.query(text)

  return queryResult.rows
}

export const deleteDrawingModel = async (drawing_id) => {
  let text = `DELETE FROM drawings
              WHERE id=$1`
  let values = [drawing_id]

  await db.query(text, values)

  return
}
