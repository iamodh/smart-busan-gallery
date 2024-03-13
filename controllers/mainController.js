require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const showMain = (req, res) => {
  console.log(req.cookies);
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/");
  }

  const { userName } = jwt.verify(token, jwtSecret);
  res.render("main", { userName });
};

// 게시글 표시하기
const getPost = async (req, res) => {
  const { id } = req.params;
  res.send(`Post ID: ${id}`);
};

// 댓글 표시하기
// const getComments = async(req, res) => {
//   const post = await Comments.findById(req.params.id);
//   res.send(`Comments ID: ${req.params.id}`);
// };

module.exports = { showMain, getPost };
