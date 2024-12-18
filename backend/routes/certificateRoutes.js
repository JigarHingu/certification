const express = require("express");
const Certificate = require("../models/Certificate");
const router = express.Router();

// Create a new certificate
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const certificate = new Certificate({ name });
    await certificate.save();
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all categories 
router.get("/", async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
