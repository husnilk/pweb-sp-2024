var express = require("express");
var router = express.Router();
const db = require("./models/index");
const { where } = require("sequelize");

/* GET /auth/login. */
router.get("/login", function (req, res, next) {
  res.render("auth/login", { layout: "layouts/nosidebar" });
});

// POST /auth/login
router.post("/login", function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  let checkLogin = db.User.findAll({
    where: {
      username: username,
      password: password,
      active: 1,
    },
  });
  if (checkLogin) {
    res.redirect("/home");
  }
  res.redirect("/auth/login");
});

//POST /auth/logout
router.post("/logout", function (req, res, next) {
  res.redirect("/auth/login");
});

module.exports = router;
