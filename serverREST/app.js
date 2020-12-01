const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const todosRouter = require("./routes/todos");
const listsRouter = require("./routes/lists");
const userRouter = require("./routes/user");

require("dotenv/config");
// mongodb+srv://ev:<password>@todo.cumeg.mongodb.net/<dbname>?retryWrites=true&w=majority
app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/todos", todosRouter);
app.use("/lists", listsRouter);

mongoose
  .connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// mongoose.connection.once("open", () => {

// });

app.listen(5050, () => console.log("Listening on port 5050..."));
