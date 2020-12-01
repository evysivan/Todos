const express = require("express");
const User = require("../models/user");
const { changeIdPropNameCollection, changeIdPropName } = require("../utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const router = express.Router();

const { registerValidation, loginValidation } = require("../validation");

router.get("/", (req, res) => {
  res.send("bla");
});

router.post("/login", async (req, res) => {
  //VALIDATION
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  //CHECK EMAIL
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  //CHECK PASSWORD
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid email or password" });

  try {
    //make expire token
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/register", async (req, res) => {
  //VALIDATION
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  //CHECK EMAIL
  const isUserExist = await User.findOne({ email: req.body.email });
  if (isUserExist)
    return res.status(400).json({ message: "Email already exist" });

  //HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //CREATE USER
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUserDB = await user.save();
    const savedUser = changeIdPropName(savedUserDB.toObject());
    res.json({
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
