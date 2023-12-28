const login = (req, res) => {
  res.send("This is login page");
};
const signup = (req, res) => {
  res.send("This is login signup page");
};

module.exports = { login, signup };
