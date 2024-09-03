//Modules and Globals
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//Express Settings
app.use(express.json());
app.use(cors());

//Controllers and Routes
app.use("/books", require("./controllers/books"));
app.get("/", function (req, res) {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

function onServerStart() {
  console.log("listening on port ", PORT);
  mongoose.connect(process.env.MONGO_URI);
}

app.listen(PORT, onServerStart);
