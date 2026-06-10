const express = require("express");

const router = express.Router();

const { HoldingsModel } = require("../models/HoldingsModel");

const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET HOLDINGS
========================= */

router.get(
  "/allHoldings",
  authMiddleware,

  async (req, res) => {

    try {

      const holdings = await HoldingsModel.find({});

      res.json(holdings);

    } catch (err) {

      res.status(500).json({
        message: "Server Error",
      });

    }

  }
);

module.exports = router;