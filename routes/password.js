var express = require("express");
var router = express.Router();

// GET /password/edit
router.get("/edit", function (req, res, next) {
  res.render("auth/password");
});

// POST /password/edit
router.post("/edit", function (req, res, next) {
  res.redirect("/profile/");
});

module.exports = router;
