const express = require("express");
const Todo = require("../models/todo");

const router = express.Router();

router.get("/:listId", (req, res) => {
  Todo.find({ listId: req.params.listId })
    .then(todos => res.json(todos))
    .catch(err => res.json(err));
});

router.get("/", (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.json(err));
});

router.patch("/:todoId/completed", (req, res) => {
  const todo = Todo.find({ _id: req.params.todoId });
  Todo.updateOne(
    { _id: req.params.todoId },
    { $set: { completed: !todo.completed } }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.patch("/:todoId", (req, res) => {
  Todo.updateOne(
    { _id: req.params.todoId },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        listId: req.body.listId
      }
    }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});
router.delete("/:todoId", (req, res) => {
  Todo.remove({ _id: req.params.todoId })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    listId: req.body.listId,
    completed: false
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
