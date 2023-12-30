const User = require("../db/models/userModel");
const bcrypt = require("bcrypt");
const login = (req, res) => {
  res.render("login/login.ejs");
};
const loginPost = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    // User not found
    res.status(401).send("user not exist");
    return;
  }

  if (user.password !== password) {
    res.status(401).send("Invalid password");
    return;
  } else {
    res.send(`Hello ${user.username}`);
  }
};
const signup = (req, res) => {
  res.render("signup/signup.ejs");
};
const signupPost = (req, res) => {
  console.log("Input Data is ->", req.body);

  const { username, password, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({
    username,
    password: hashPassword,
    email,
  });

  newUser
    .save()
    .then((data) => {
      console.log(data);
      res.send("singUp successful!");
    })
    .catch((error) => {
      console.log(error);
      res.send(`Error occurred while signup ${error.message}`);
    });
};

module.exports = { login, signup, signupPost, loginPost };
