const isAuthenticated = (req, res, next) => {
  if (req.session.email && req.session.role === 1) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

module.exports = isAuthenticated;
