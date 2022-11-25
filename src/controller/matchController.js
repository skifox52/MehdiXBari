import MatchModel from "../model/matchModel.js"
import expressAsyncHandler from "express-async-handler"

export const getMatch = async (req, res) => {
  try {
    const response = await MatchModel.find()
    res.status(200).render("pages/matches", { matches: response })
  } catch (error) {
    console.error(error)
  }
}

export const insertMatch = expressAsyncHandler(async (req, res) => {
  const { mehdi, bari } = req.body
  if ((!mehdi, !bari)) {
    throw new Error("Empty fields")
  }
  const newMatch = await MatchModel.create({
    mehdi,
    bari,
  })
  res.status(201).json(newMatch)
})

export const getIndex = expressAsyncHandler(async (req, res) => {
  const response = await MatchModel.find()
  let mehdi = 0
  let bari = 0
  response.forEach((match) => {
    if (match.mehdi > match.bari) {
      mehdi++
    } else if (match.bari > match.mehdi) {
      bari++
    } else {
      mehdi++
      bari++
    }
  })
  res.status(200).render("pages/index", { mehdi, bari })
})
