const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

const certificateRoutes = require("./routes/certificateRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use("/api/categories", certificateRoutes);
app.use("/api/questions", questionRoutes);

// Simple route for root
app.get("/", (req, res) => {
    res.send("Backend running successfully");
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
