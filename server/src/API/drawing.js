import express from "express"
const router = express.Router()

import {asyncHandler} from "../Middleware/asyncErrorHandler.js"
import {requireAuth} from "../Middleware/auth.js"
import {postDrawing, getDrawings, deleteDrawing} from "../Services/drawing.js"

router.post("/drawing", asyncHandler(postDrawing))
router.get("/drawings", asyncHandler(getDrawings))
router.delete("/drawing", asyncHandler(deleteDrawing))

export default router
