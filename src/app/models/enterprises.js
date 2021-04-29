const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const EnterpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  consoles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Console'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Enterprise = mongoose.model("Enterprise", EnterpriseSchema);

module.exports = Enterprise;
