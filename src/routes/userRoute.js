const express = require("express");

const router = express.Router();

const {
  login,
  signup,
  signupPost,
  loginPost,
} = require("../controllers/userController");

router.get("/login", login);
router.post("/login", loginPost);

router.get("/signup", signup);
router.post("/signup", signupPost);

router.all("*", (req, res) => {
  res.send("Page not found 404");
});
module.exports = router;
