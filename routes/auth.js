var express = require("express");
var router = express.Router();

/* GET /auth/login. */
router.get("/login", function (req, res, next) {
  res.render("auth/login", { layout: "login_layout" });
});

// POST /auth/login
router.post("/login", function (req, res, next) {
  res.redirect("/home");
});

//POST /auth/logout
router.post("/logout", function (req, res, next) {
  res.redirect("/auth/login");
});

module.exports = router;
