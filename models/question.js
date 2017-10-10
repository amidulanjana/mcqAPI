const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    paper: { type: Schema.Types.ObjectId, ref: "paper" },
    question: String,
    answers: Array,
    correctAnswers: Array
  },
  { timestamps: true }
);

module.exports = mongoose.model("question", QuestionSchema);
