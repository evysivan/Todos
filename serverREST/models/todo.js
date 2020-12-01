const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  listId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Todos", todoSchema);
