const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require("./models/user")
const findOrCreate=require("mongoose-findorcreate")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback',
    scope: ['profile','email'],
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  (accessToken, refreshToken, profile, done ) => {

    User.findOrCreate({ googleId: profile.id }, { name: profile.name.givenName, email: profile.emails[0].value }, function(err, user) {
        return done(err, user);
    });

  }
));

module.exports = passport;
