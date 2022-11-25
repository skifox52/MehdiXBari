import express from "express";
import { connect } from "mongoose";
import "dotenv/config";
import matchRouter from "./routes/matchRoute.js";
const app = express();
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use("/", matchRouter);
app.get("/", (req, res) => {
    res.render("pages/index");
});
connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => console.log("App running on port", process.env.PORT));
});
