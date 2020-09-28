const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/tags", async (req, res, next) => {
  try {
    let results = await db.tags();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/charities", async (req, res, next) => {
  try {
    let results = await db.charities();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
