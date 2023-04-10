const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.get("/fast", (_req, res) => {
  res.send("This was fast!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
