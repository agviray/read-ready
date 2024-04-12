const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const AccountDetail = require('../models/accountDetail');

passport.use(
  new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // The verify callback function.
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // Once a user is logged in with OAuth:
        // - Check if user exists in database via profile.id search.
        let user = await User.findOne({ googleId: profile.id });
        // If existing user is found, provide them to passport.
        if (user) {
          return cb(null, user);
        }
        // Otherwise, the user that logged in via OAuth, is actually a new user.
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
        // Automatically create ReadReady account details for the new user.
        await AccountDetail.create({
          userGoogleId: user.googleId,
          name: user.name,
          email: user.email,
        });
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
  cb(null, await User.findById(userId));
});
