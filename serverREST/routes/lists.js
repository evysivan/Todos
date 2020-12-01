const express = require("express");
const List = require("../models/list");
const Todo = require("../models/todo");
const {
  changeIdPropNameCollection,
  changeIdPropName,
  verifyTokenMiddleware
} = require("../utils");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const listsDB = await List.find({}).lean();
    const todosDB = await Todo.find({}).lean();

    const lists = changeIdPropNameCollection(listsDB);
    const todos = changeIdPropNameCollection(todosDB);

    let listsWithTodos = lists.map(list => {
      let todoList = todos.filter(todo => todo.listId == list.id).reverse();
      return Object.assign(list, { todoList, id: list.id });
    });
    res.json(listsWithTodos);
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:listId", async (req, res) => {
  try {
    const updatedListDB = await List.findByIdAndUpdate(
      { _id: req.params.listId },
      { $set: { title: req.body.newTitle } },
      { useFindAndModify: false }
    ).lean();

    const updatedList = changeIdPropName(updatedListDB);

    res.json(updatedList);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:listId", async (req, res) => {
  try {
    const deletedListDB = await List.findOneAndRemove({
      _id: req.params.listId
    });
    const deletedList = changeIdPropName(deletedListDB.toObject());
    res.json(deletedList);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", verifyTokenMiddleware, async (req, res) => {
  const list = new List({
    title: req.body.title
  });
  try {
    const savedListDB = await list.save();
    const savedList = changeIdPropName(savedListDB.toObject());
    res.json(savedList);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
