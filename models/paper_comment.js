const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaperCommentSchema = new Schema(
  {
    paper: { type: Schema.Types.ObjectId, ref: "paper" },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    comment: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("paperComment", PaperCommentSchema);
