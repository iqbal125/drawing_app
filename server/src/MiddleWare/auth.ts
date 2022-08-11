import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const requireAuth = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization

  // token validation
  try {
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.AUTH_SECRET)
    next()
  } catch (err) {
    res.status(403).send(err)
    return
  }
}

export const setToken = (user:string | object | Buffer) => {
  let opts = {
    expiresIn: "7d",
  }
  let secret = process.env.AUTH_SECRET

  return jwt.sign({user}, secret, opts)
}
