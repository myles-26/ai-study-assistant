const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    type: { type: String },
    size: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Document", documentSchema);
