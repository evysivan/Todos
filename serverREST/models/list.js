const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Lists", listSchema);
