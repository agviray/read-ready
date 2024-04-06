// Middlware for routes that require a logged in user.
module.exports = function (req, res, next) {
  // isAuthenticated is a method that Passport adds to the req object.
  // isAuthenticated returns true or false depending upon whether there's a
  // logged in user or not.
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
