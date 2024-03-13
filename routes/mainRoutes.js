const express = require("express");

/* Middlewares */
const checkLogin = require("../middlewares/checkLogin");

/* Controllers */
const {
  showMain,
  getPost,
  getComments,
} = require("../controllers/mainController");

const router = express.Router();

router.route("/").all(checkLogin).get(showMain);
router.route("/:id").all(checkLogin).get(getPost);

module.exports = router;
