const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const FACEBOOK_APP_ID = '6013318072090518';
const FACEBOOK_APP_SECRET = '2f4b74c83a06baeb96faa87a9c7d6568';

const strategyFacebook = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
        // profileFields: ['id', 'displayName', 'photos', 'email'],
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log('passport-facebook:', profile._json);
        return cb(null, profile._json);
      }
    )
  );
};

module.exports = strategyFacebook;
