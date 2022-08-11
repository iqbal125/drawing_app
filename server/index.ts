import app from "./src/app"
import { Response,Request } from "express"
const port = process.env.PORT || 5000

app.get("/", (req:Request, res:Response) => {
  res.status(200).send()
})

app.listen(port, () => console.log(`Running on port ${port}`))
