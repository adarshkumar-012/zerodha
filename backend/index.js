require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const holdingRoutes = require("./routes/holdingRoutes");
const orderRoutes = require("./routes/orderRoutes");
const positionRoutes = require("./routes/positionRoutes");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3000",
  process.env.DASHBOARD_URL || "https://zerodha-dashboard-h9fx.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

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
app.use("/", orderRoutes);
app.use("/", positionRoutes);

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});