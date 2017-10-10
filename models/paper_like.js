const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaperLikeSchema = new Schema(
  {
    paper: { type: Schema.Types.ObjectId, ref: "paper" },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    numOfLike: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("PaperLike", PaperLikeSchema);
