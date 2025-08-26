const express = require("express");
const Document = require("../middleware/auth");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const docs = await Document.find({ owner: req.userId }).sort({
      createdAt: -1,
    });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { name, type, size } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    const doc = await Document.create({
      owner: req.userId,
      name,
      type,
      size,
    });

    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
