const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const ConsoleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  enterprise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Enterprise",
    require: true,
  },
  games: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game'
  }],
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

const Console = mongoose.model("Console", ConsoleSchema);

module.exports = Console;
