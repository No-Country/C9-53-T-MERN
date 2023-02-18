const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const strategyLocal = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log({username});
      console.log({password});

      const user = {
        email: username,
        password,
      };

      return done(null, user);
    })
  );
};

module.exports = strategyLocal;
