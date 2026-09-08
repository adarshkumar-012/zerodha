const express = require("express");
const router = express.Router();

const { PositionsModel } = require("../models/PositionsModel");

router.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
