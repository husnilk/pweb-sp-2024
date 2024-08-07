const isEmployee = (req, res, next) => {
  if (req.session.email && req.session.role == 2) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

module.exports = isEmployee;
