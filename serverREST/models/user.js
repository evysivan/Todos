const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 15
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 256
  }
});

module.exports = mongoose.model("User", userSchema);
