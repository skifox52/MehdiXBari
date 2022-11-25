import express from "express"
import {
  getMatch,
  insertMatch,
  getIndex,
} from "../controller/matchController.js"
const matchRouter = express.Router()
matchRouter.get("/matches", getMatch).post("/", insertMatch).get("/", getIndex)
export default matchRouter
