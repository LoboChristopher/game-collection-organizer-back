const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const accessorieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  console: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Console",
    require: true,
  },
  collected: {
    type: Boolean,
    require: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Accessorie = mongoose.model("accessorie", accessorieSchema);

module.exports = Accessorie;
