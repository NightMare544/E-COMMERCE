/** @format */

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");

app.user(express.json());

const app = express();

mongoose.connect(config.database, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/account");

app.use("/api", mainRoutes);
app.use("/api/accounts", userRoutes);

app.listen(config.port, (err) => {
  console.log("Magic happens on port awesome " + config.port);
});
