const jwt = require("jsonwebtoken");
require("dotenv/config");

//Mongoose creates id with prop name "_id", change back to "id"
const changeIdPropNameCollection = collection => {
  const nextCollection = collection.map(item => {
    const { _id, ...rest } = item;
    rest.id = _id;
    return rest;
  });
  return nextCollection;
};
const changeIdPropName = item => {
  const { _id, ...rest } = item;
  rest.id = _id;

  return rest;
};

//Verify token
const verifyTokenMiddleware = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  changeIdPropName,
  changeIdPropNameCollection,
  verifyTokenMiddleware
};
