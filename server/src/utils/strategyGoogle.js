const usersDAO = require('../dao/usersDAO');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const CLIENT_ID_GOOGLE =
  '181204227434-mdco9kqr7gtipplgcb89c3jp707l1cgv.apps.googleusercontent.com';
const CLIENT_SECRET_GOOGLE = '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';

const dao = new usersDAO();

const strategyGoogle = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: CLIENT_ID_GOOGLE,
        clientSecret: CLIENT_SECRET_GOOGLE,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, email, cb) => {
        const user = email._json;

        const usersMongo = await dao.getAll();

        let isUser = false;

        usersMongo.forEach(
          (userMongo) => userMongo.email === user.email && (isUser = true)
        );

        if (!isUser) {
          dao.save({
            name: user.given_name,
            email: user.email,
            password: '987654321',
          });
        }

        return cb(null, user);
      }
    )
  );

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      cb(null, user);
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });
};

module.exports = strategyGoogle;
