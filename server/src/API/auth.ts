import express from "express"
const router = express.Router()

import {asyncHandler} from "../Middleware/asyncErrorHandler"
import {Login, SignUp} from "../Services/auth"

//sign in or sign up user then send jwt token
router.post("/signup", asyncHandler(SignUp))
router.post("/login", asyncHandler(Login))

export default router
