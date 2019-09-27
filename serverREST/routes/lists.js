const express = require("express");
const List = require("../models/list");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const lists = await List.find({});
    res.send(lists);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:listId", async (req, res) => {
  try {
    const updatedList = await List.updateOne(
      { _id: req.params.listId },
      { $set: { title: req.body.title } }
    );
    res.send(updatedList);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:listId", async (req, res) => {
  try {
    const deletedList = await List.remove({ _id: req.params.listId });
    res.send(deletedList);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const list = new List({
    title: req.body.title
  });
  try {
    const savedList = await list.save();
    res.send(savedList);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
