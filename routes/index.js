var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page (ie the root route) */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ReadReady' });
});

// -------------------------
// Google OAuth login route
// -------------------------
router.get(
  '/auth/google',
  passport.authenticate(
    // Specify the passport strategy that's being used. In this case, it's 'google'
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // pronte: "select_account"
    }
  )
);

// ----------------------------
// Google OAuth callback route
// ----------------------------
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

// -------------------
// OAuth logout route
// -------------------
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

module.exports = router;
