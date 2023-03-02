const passport = require('passport');
const bcrypt = require('bcrypt');
const UsersDAO = require('../dao/usersDAO');
const LocalStrategy = require('passport-local').Strategy;

const dao = new UsersDAO();

const strategyLocal = async () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const listUsers = await dao.getAll();

      let userFound;
      listUsers.forEach((user) => user.email == username && (userFound = user));

      if (!userFound) return done(null, false);

      const isCompared = await bcrypt.compare(password, userFound.password);

      if (!isCompared) return done(null, false);

      const user = {
        email: username,
      };

      return done(null, user);
    })
  );
};

module.exports = strategyLocal;
