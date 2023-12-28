const express = require("express");

const router = express.Router();

const { login, signup } = require("../controllers/userController");

router.get("/login", login);

router.get("/signup", signup);

router.all("*", (req, res) => {
  res.send("Page not found 404");
});
module.exports = router;
