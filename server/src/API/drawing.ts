import express from "express"
const router = express.Router()

import {asyncHandler} from "../Middleware/asyncErrorHandler"
import {requireAuth} from "../Middleware/auth"
import {postDrawing, getDrawings, deleteDrawing} from "../Services/drawing"

router.post("/drawing", requireAuth, asyncHandler(postDrawing))
router.get("/drawings", asyncHandler(getDrawings))
router.delete("/drawing", requireAuth, asyncHandler(deleteDrawing))

export default router
