require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

const mongodbUrl = process.env.MONGO_URI;
mongoose.connect(mongodbUrl, {});

app.use("/api/v1", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
