const express = require("express");
require("dotenv").config();
const router = require("./src/network/routes");

var app = express();
app.use(express.json());

router(app);

app.use("/app", express.static("public"));

app.listen(process.env.PORT);
console.log("Server open on localhost:", process.env.PORT);
