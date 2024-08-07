var express = require("express");
const isAuthenticated = require("../middlewares/is_authenticated");
var router = express.Router();

router.get("/", isAuthenticated, function (req, res, next) {
  res.render("profile/index");
});

router.get("/edit", isAuthenticated, function (req, res, next) {
  res.render("profile/edit");
});

router.post("/edit", function (req, res, next) {
  res.redirect("/profile/");
});
module.exports = router;
