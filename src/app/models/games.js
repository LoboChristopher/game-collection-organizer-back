const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const GameSchema = new mongoose.Schema({
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
  launchDate: {
    type: Date,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
