const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
require("dotenv").config();
//middleware

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/tasks", tasks);

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
