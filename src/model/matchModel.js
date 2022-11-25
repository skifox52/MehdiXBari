import { Schema, model } from "mongoose"

const matchSchema = new Schema(
  {
    mehdi: {
      type: Number,
      required: true,
    },
    bari: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const MatchModel = model("Match", matchSchema)
export default MatchModel
