var express = require("express");
var isStudent = require("../middlewares/is_student");
var router = express.Router();

// GET /password/edit
router.get("/edit", isStudent, function (req, res, next) {
  res.render("auth/password");
});

// POST /password/edit
router.post("/edit", function (req, res, next) {
  res.redirect("/profile/");
});

module.exports = router;
