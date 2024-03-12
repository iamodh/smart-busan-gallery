const handleHome = (req, res) => {
  res.send("Home");
};
const handleLogin = (req, res) => {
  res.send("Login");
};
const handleJoin = (req, res) => {
  res.send("Join");
};

module.exports = { handleHome, handleLogin, handleJoin };
