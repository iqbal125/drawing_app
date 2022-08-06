import express from "express"

//initialize 3rd party libraries
import "./Config/dotenv.js"
import "./Database/db.js"

import cors from "cors"
import morgan from "morgan"

import limiter from "./Middleware/rateLimiter.js"
import {errorHandler} from "./Middleware/errorHandler.js"
import {unhandledRejectionHandler} from "./Middleware/unhandledRejectionHandler.js"

import auth from "./API/auth.js"

const app = express()

//Middleware
app.use(cors())
app.use(limiter)
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/auth", auth)

// error handling
app.use(errorHandler)
process.on("unhandledRejection", unhandledRejectionHandler)

export default app
