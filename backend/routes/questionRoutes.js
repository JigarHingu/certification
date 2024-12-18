const express = require("express");
const Question = require("../models/Question");
const router = express.Router();

// Add a question under a certificate
router.post("/", async (req, res) => {
  try {
    const { certificate, question } = req.body;
    const newQuestion = new Question({ certificate, question });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all questions with certificate details
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find().populate("certificate", "name");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
