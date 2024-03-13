const express = require("express");

/* Middlewares */
const checkLogin = require("../middlewares/checkLogin");

/* Controllers */
const {
  showMain,
  createPost,
  uploadPost,
  seePost,
  getComments,
} = require("../controllers/mainController");

const router = express.Router();

router.route("/").all(checkLogin).get(showMain);
router.route("/post").all(checkLogin).get(createPost).post(uploadPost);
router.route("/:id").all(checkLogin).get(seePost);

module.exports = router;
