const express = require("express");
const userRoute = require("./src/routes/userRoute");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("./src/views"));

app.use("/user", userRoute);

app.get("/", (req, res) => {
  // res.send("This is My APP Home page");
  res.render("./home/home.ejs");
});

app.all("*", (req, res) => {
  res.send("Page not found 404");
});
const PORT = 2000;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Listening on port ${PORT}`);
});
