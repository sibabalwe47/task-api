const express = require("express");
const consign = require("consign");
const app = express();

consign()
  .include("db.js")
  .then("models")
  .then("libs/middleware.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
