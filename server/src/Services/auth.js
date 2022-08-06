import {setToken} from "../Middleware/auth.js"
import {saveUsertoDB, getUser} from "../Model/auth.js"
import bcrypt from "bcrypt"

const hashPassword = async (plainTextPass) => {
  const hash = await bcrypt.hash(plainTextPass, 10)
  return hash
}

async function comparePassword(plaintextPassword, hash) {
  const result = await bcrypt.compare(plaintextPassword, hash)
  return result
}

export const SignUp = async (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  //First Check if User exists
  const userExists = await getUser(email)

  //If user exists send error message, otherwise continue code
  if (userExists) {
    res.status(400).send({type: "Failed Sign Up", message: "User Already Exists"})
    return
  }

  let hashedPass = await hashPassword(password)

  //save user info to our own db, and get unique user database id
  let result = await saveUsertoDB(email, username, hashedPass)
  let user_id = result.id

  //maybe send back all
  res.send({token: setToken(user_id)})
}

export const Login = async (req, res) => {
  let email = req.body.email
  const password = req.body.password

  //Check if User exists
  let user = await getUser(email)

  //If user not found send error message
  if (!user) {
    res.status(400).send({type: "Failed Login", message: "User or Password incorrect"})
    return
  }

  let isPasswordValid = await comparePassword(password, user.password)

  if (!isPasswordValid) {
    res.status(400).send({type: "Failed Login", message: "User or Password incorrect"})
    return
  }

  let user_id = user.id

  res.send({token: setToken(user_id)})
}
