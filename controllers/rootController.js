const getHome = (req, res) => {
  res.send("Home");
};
const getLogin = (req, res) => {
  res.send("Login");
};
const getJoin = (req, res) => {
  res.status(200).render("join");
};
const postJoin = (req, res) => {
  const { userName, password } = req.body;
  res.send(`${userName} ${password}`);
};

module.exports = { getHome, getLogin, getJoin, postJoin };
