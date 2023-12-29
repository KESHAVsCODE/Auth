const login = (req, res) => {
  res.send("get login");
};
const loginPost = (req, res) => {
  res.send("THIS is post");
};
const signup = (req, res) => {
  res.render("signup/signup.ejs");
};
const signupPost = (req, res) => {
  console.log("Input Data is ->", req.body);
  res.send("THIS is post");
};

module.exports = { login, signup, signupPost, loginPost };
