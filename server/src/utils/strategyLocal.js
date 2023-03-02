const passport = require('passport');
const UsersDAO = require('../dao/usersDAO');
const LocalStrategy = require('passport-local').Strategy;

const dao = new UsersDAO();

const strategyLocal = async () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const listUsers = await dao.getAll();
      console.log(listUsers);

      let isValid;
      listUsers.forEach((user) => user.email == username && (isValid = true));

      if (!isValid) return done(null, false);

      isValid = false;
      listUsers.forEach(
        (user) => user.password === password && (isValid = true)
      );

      if (!isValid) return done(null, false);

      const user = {
        email: username,
        password,
      };

      return done(null, user);
    })
  );
};

module.exports = strategyLocal;
