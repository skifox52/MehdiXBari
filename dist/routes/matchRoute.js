import express from "express";
import { getMatch } from "../controller/matchController.js";
const matchRouter = express.Router();
matchRouter.get("/", getMatch);
export default matchRouter;
