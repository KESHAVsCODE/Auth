const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is My APP Home page");
});

const PORT = 2000;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${PORT}`);
});
