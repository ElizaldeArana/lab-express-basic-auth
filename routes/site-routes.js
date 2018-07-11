const express    = require("express");
const siteRoutes = express.Router();

siteRoutes.get("/", (req, res, next) => {
  res.render("home");
});

siteRoutes.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

siteRoutes.get("/secret1", (req, res, next) => {
  res.render("secret1");
});

siteRoutes.get("/secret2", (req, res, next) => {
  res.render("secret2");
});

module.exports = siteRoutes;
