import {Request, Response} from "express"
import {postDrawingModel, getDrawingsModel, deleteDrawingModel} from "../Model/drawing"

export const getDrawings = async (req: Request, res: Response) => {
  let result = await getDrawingsModel()

  res.status(200).send(result)
}

export const postDrawing = async (req: Request, res: Response) => {
  const dataURL = req.body.dataURL
  const user_id = req.body.user_id
  const isPrivate = req.body.isPrivate
  const timeToDraw = req.body.timeToComplete
  const dateCompleted = req.body.submitedTime
  const author = req.body.author

  await postDrawingModel(dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted)

  res.status(200).send("Post Successful")
}

export const deleteDrawing = async (req: Request, res: Response) => {
  const drawing_id = req.query.drawing_id

  await deleteDrawingModel(drawing_id.toString())

  res.status(200).send("Delete Successful")
}
