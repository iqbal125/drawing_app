import express from "express"

// initialize 3rd party libraries
import "./Config/dotenv"
import "./Database/db"

import cors from "cors"
import morgan from "morgan"

import limiter from "./Middleware/rateLimiter"
import {errorHandler} from "./Middleware/errorHandler"
import {unhandledRejectionHandler} from "./Middleware/unhandledRejectionHandler"

import auth from "./API/auth"
import drawing from "./API/drawing"

const app = express()

// Middleware
app.use(cors())
app.use(limiter)
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/auth", auth)
app.use("/api", drawing)

// error handling
app.use(errorHandler)
process.on("unhandledRejection", unhandledRejectionHandler)

export default app
