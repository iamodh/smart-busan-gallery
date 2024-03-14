const express = require("express");

/* Middlewares */
const checkLogin = require("../middlewares/checkLogin");

/* Controllers */
const {
  showMain,
  createPost,
  uploadPost,
  seePost,
  addComment,
  updateUps,
  updateDowns,
} = require("../controllers/mainController");

const router = express.Router();

router.route("/").all(checkLogin).get(showMain);
router.route("/post").all(checkLogin).get(createPost).post(uploadPost);
router.route("/:id").all(checkLogin).get(seePost);
router.route("/:id/addComment").all(checkLogin).post(addComment);
router.route("/:id/updateUps").all(checkLogin).put(updateUps);
router.route("/:id/updateDowns").all(checkLogin).put(updateDowns);

module.exports = router;
