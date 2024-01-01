const User = require("../db/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = (req, res) => {
  res.render("login/login.ejs");
};

const SECRETE_KEY = "ninja";
const loginPost = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    // User not found
    res.status(401).send("user not exist");
    return;
  }

  const isPassword = await bcrypt.compare(password, user.password);

  if (isPassword) {
    const userData = {
      id: user._id,
      email,
    };
    const options = {
      expiresIn: "600s",
    };
    const jwtToken = jwt.sign(userData, SECRETE_KEY, options);

    res.cookie("AuthToken", jwtToken);
    res.send(`Hello ${user.username}`);
    return;
  } else {
    res.status(401).send("Invalid password");
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

const profile = (req, res) => {
  const { AuthToken } = req.cookies;
  console.log("cookie", AuthToken);
  jwt.verify(AuthToken, SECRETE_KEY, async (err, decodedToken) => {
    console.log(decodedToken);
    if (err) return res.send("Try to login again");

    const user = await User.findById(decodedToken.id);
    res.send(`${user.username} This is your profile page`);
  });
};

module.exports = { login, signup, signupPost, loginPost, profile };
