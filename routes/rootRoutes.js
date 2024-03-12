const express = require("express");

/* Controllers */
const {
  getHome,
  getLogin,
  getJoin,
  postJoin,
} = require("../controllers/rootController");

const router = express.Router();

router.route("/").get(getHome);
router.route("/login").get(getLogin);
router.route("/join").get(getJoin).post(postJoin);

module.exports = router;
