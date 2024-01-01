const express = require("express");
const userRoute = require("./src/routes/userRoute");
require("./src/db/connectDB");
const cookie = require("cookie-parser");
const app = express();

app.use(cookie());
app.set("view engine", "ejs");

app.set("views", "./src/views");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./src/views"));

app.use("/user", userRoute);

app.get("/home", (req, res) => {
  res.render("home/home.ejs");
});

app.all("*", (req, res) => {
  res.send("Page not found 404");
});
const PORT = 2000;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${PORT}`);
});
