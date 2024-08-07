var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var profileRouter = require("./routes/profile");
var passwordRouter = require("./routes/password");
var templateRouter = require("./routes/template");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("view options", { layout: "layouts/main" });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", indexRouter);
app.use("/template", templateRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter); ///auth/login, /auth/logout
app.use("/profile", profileRouter); // /profile/edit, /profile/edit, profile/
app.use("/password", passwordRouter); // /password/edit, /password/edit

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
