const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startedAt: { type: Date, required: true },
    durationSeconds: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
