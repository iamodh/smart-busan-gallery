require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const Post = require("../models/Post");

// @desc Show main page
// @route Get /main
const showMain = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.render("main", { posts });
};

// @desc Create post
// @route Get /post
const createPost = (req, res) => {
  res.render("createPost");
};

// @desc Upload post
// @route Post /post
const uploadPost = async (req, res) => {
  const { postTitle, postContent } = req.body;
  const token = req.cookies.token;
  const { _id } = jwt.verify(token, jwtSecret);
  await Post.create({ postTitle, postContent, writer: _id });
  res.redirect("/main");
};

// @desc See post
// @route Get /:id
const seePost = (req, res) => {
  const { id } = req.params;
  res.send(`Post ID: ${id}`);
};

// 댓글 표시하기
// const getComments = async(req, res) => {
//   const post = await Comments.findById(req.params.id);
//   res.send(`Comments ID: ${req.params.id}`);
// };

module.exports = { showMain, createPost, uploadPost, seePost };
