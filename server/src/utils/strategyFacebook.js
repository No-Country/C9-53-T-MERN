const usersDAO = require('../dao/usersDAO');
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');

const FACEBOOK_APP_ID = '6013318072090518';
const FACEBOOK_APP_SECRET = '2f4b74c83a06baeb96faa87a9c7d6568';

const dao = new usersDAO();

const strategyFacebook = () => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: '/auth/facebook/callback',
      },
      async (accessToken, refreshToken, profile, cb) => {
        const user = profile._json;

        const usersMongo = await dao.getAll();

        let isUser = false;

        usersMongo.forEach(
          (userMongo) => userMongo.id_facebook === user.id && (isUser = true)
        );

        if (!isUser) {
          dao.save({
            name: user.name,
            email: '',
            password: '',
            id_facebook: user.id,
          });
        }

        return cb(null, profile._json);
      }
    )
  );
};

module.exports = strategyFacebook;
