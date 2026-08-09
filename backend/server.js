const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// =========================
// MIDDLEWARE
// =========================

app.use(cors());

app.use(express.json());


// =========================
// MONGODB CONNECTION
// =========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected Successfully");

  })
  .catch((error) => {

    console.log(
      "MongoDB Connection Error:",
      error.message
    );

  });


// =========================
// ROUTES
// =========================

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {

  res.json({
    message: "CareerConnect Backend API is running"
  });

});


// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});