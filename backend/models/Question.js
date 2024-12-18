const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  certificate : { type: mongoose.Schema.Types.ObjectId, ref: "Certificate", required: true },
  question: { type: String, required: true },
});

module.exports = mongoose.model("Question", QuestionSchema);
