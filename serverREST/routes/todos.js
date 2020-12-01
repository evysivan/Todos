const express = require("express");
const Todo = require("../models/todo");
const { changeIdPropNameCollection, changeIdPropName } = require("../utils");

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

router.patch("/:todoId/completed", async (req, res) => {
  try {
    const todo = await Todo.find({ _id: req.params.todoId });
    // console.log(todo);
    const updatedDB = await Todo.findByIdAndUpdate(
      { _id: req.params.todoId },
      { $set: { completed: !todo[0].completed } },
      { useFindAndModify: false }
    );
    // console.log(updatedDB);
    const updated = changeIdPropName(updatedDB.toObject());
    // console.log(updated);
    return res.json(updated);
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:todoId", (req, res) => {
  Todo.findByIdAndUpdate(
    { _id: req.params.todoId },
    {
      $set: {
        title: req.body.title,
        description: req.body.description
      }
    },
    { useFindAndModify: false }
  )
    .then(dataDB => {
      const data = changeIdPropName(dataDB.toObject());
      console.log(data);
      res.json(data);
    })
    .catch(err => res.json(err));
});
router.delete("/:todoId", (req, res) => {
  Todo.findByIdAndRemove(
    { _id: req.params.todoId },
    { useFindAndModify: false }
  )
    .then(dataDB => {
      const data = changeIdPropName(dataDB.toObject());
      res.json(data);
    })
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
    const savedTodoDB = await todo.save();
    const savedTodo = changeIdPropName(savedTodoDB.toObject());

    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
