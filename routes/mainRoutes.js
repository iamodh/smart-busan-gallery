const express = require("express");

/* Controllers */
const {
  showMain,
  getPost,
  getComments
} = require("../controllers/mainController");

const router = express.Router();

router.route("/").get(showMain);
router.route("/:id").get(getPost);

module.exports = router;
