const isAuthenticated = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

module.exports = isAuthenticated;
