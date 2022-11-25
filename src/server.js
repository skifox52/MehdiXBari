import express from "express"
import { connect } from "mongoose"
import "dotenv/config"
import matchRouter from "./routes/matchRoute.js"
import { errorHandlerMiddleware } from "./error-handler/error-handler.js"
const app = express()

app.set("view engine", "ejs")
app.use(express.static("views"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", matchRouter)
app.use(errorHandlerMiddleware)

connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () =>
    console.log("App running on port", process.env.PORT)
  )
})
