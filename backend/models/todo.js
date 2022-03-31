const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema({
  content: {
    type: String,
    required: true,
    unique: true,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
