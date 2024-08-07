var express = require("express");
var brcypt = require("bcryptjs");
var router = express.Router();
var db = require("../models/index");

/* GET /auth/login. */
router.get("/login", function (req, res, next) {
  res.render("auth/login", { layout: "layouts/nosidebar" });
});

// POST /auth/login
router.post("/login", async function (req, res, next) {
  //Get email and password from the request
  let email = req.body.email;
  let password = req.body.password; //plain text

  let user = await db.User.findOne({
    where: {
      email: email,
      active: 1,
    },
  });

  if (user !== null) {
    if (brcypt.compareSync(password, user.password)) {
      req.session.username = user.username;
      req.session.email = user.email;
      req.session.type = user.type;
      req.session.role = user.role;

      res.cookie("sessionId", req.sessionID);

      res.redirect("/home");
    } else {
      res.redirect("/auth/login");
    }
  } else {
    res.redirect("/auth/login");
  }
});

//POST /auth/logout
router.post("/logout", function (req, res, next) {
  req.session.destroy(() => {
    res.clearCookie("sessionId");
    res.redirect("/auth/login");
  });
});

module.exports = router;
