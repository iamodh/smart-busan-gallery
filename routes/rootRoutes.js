const express = require("express");

/* Controllers */
const {
  handleHome,
  handleJoin,
  handleLogin,
} = require("../controllers/rootController");

const router = express.Router();

router.route("/").get(handleHome);
router.route("/login").get(handleLogin);
router.route("/join").get(handleJoin);

module.exports = router;
