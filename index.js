const express = require("express");
const consign = require("consign");
const app = express();

// Middleware
app.set("json spaces", 4);

consign()
  .include("models")
  .then("libs/middleware.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
