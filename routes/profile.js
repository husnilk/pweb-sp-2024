var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("profile/index");
});

router.get("/edit", function (req, res, next) {
  res.render("profile/edit");
});

router.post("/edit", function (req, res, next) {
  res.redirect("/profile/");
});
module.exports = router;
