require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const holdingRoutes = require("./routes/holdingRoutes");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

/* =========================
   DATABASE
========================= */

connectDB();

/* =========================
   ROUTES
========================= */

app.use("/", authRoutes);

app.use("/", holdingRoutes);

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});