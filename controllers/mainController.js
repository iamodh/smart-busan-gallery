require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

// @desc Show main page
// @route Get /main
const showMain = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.status(200).render("main", { posts });
};

// @desc Create post
// @route Get /main/post
const createPost = (req, res) => {
  res.status(200).render("createPost");
};

// @desc Upload post
// @route Post /main/post
const uploadPost = async (req, res) => {
  const { postTitle, postContent } = req.body;
  const token = req.cookies.token;
  const { userId } = jwt.verify(token, jwtSecret);
  const newPost = await Post.create({ postTitle, postContent, writer: userId });

  const user = await User.findOne({ _id: userId });
  user.posts.unshift(newPost._id);
  await user.save();
  res.redirect("/main");
};

// @desc See post
// @route Get /main/:id
const seePost = async (req, res) => {
  const posts = await Post.find({});
  const { id } = req.params;
  const post = await Post.findById(id).populate("comments");
  console.log(post);
  post.views = post.views + 1;
  post.save();
  res.status(200).render("postview", { post, posts });
};

// @desc Add comment
// @route Post /main/:id/addComment
const addComment = async (req, res) => {
  const postId = req.params.id;
  const token = req.cookies.token;
  const { userId } = jwt.verify(token, jwtSecret);
  const { commentContent } = req.body;
  const newComment = await Comment.create({
    commentContent,
    writer: userId,
    post: postId,
  });

  // 유저가 작성한 코멘트 배열에 추가
  const user = await User.findOne({ _id: userId });
  user.comments.unshift(newComment._id);
  await user.save();

  // 포스트의 코멘트 배열에 추가
  const post = await Post.findOne({ _id: postId });
  post.comments.unshift(newComment._id);
  await post.save();
  res.redirect(`/main/${postId}`);
};

const updateUps = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  post.ups = post.ups + 1;
  post.save();

  return res.status(201).redirect(`/main/${postId}`);
};

const updateDowns = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  post.save();
  post.downs = post.downs + 1;
  return res.status(201).redirect(`/main/${postId}`);
};

module.exports = {
  showMain,
  createPost,
  uploadPost,
  seePost,
  addComment,
  updateUps,
  updateDowns,
};
