const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaperSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "user" },
    numOfEnroll: Number,
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("paper", PaperSchema);
