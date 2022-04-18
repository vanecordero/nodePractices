const express = require("express");
require("dotenv").config();

const db = require("./db");
const router = require("./src/network/routes");

db(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z6fjq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

var app = express();
app.use(express.json());

router(app);

app.use("/app", express.static("public"));

app.listen(process.env.PORT);
console.log("Server open on localhost:", process.env.PORT);
