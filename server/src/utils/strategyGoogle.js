const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const strategyGoogle = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          '181204227434-mdco9kqr7gtipplgcb89c3jp707l1cgv.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3030/auth/google/callback',
      },
      (accessToken, refreshToken, profile, email, cb) => {
        // Aquí puedes acceder a la información del perfil de usuario y guardarla en una base de datos.
        // Por ejemplo, puedes buscar el usuario en tu base de datos y si no existe, puedes crear un nuevo registro.
        const user = {
          email,
        };
        return cb(null, user);
      }
    )
  );

  passport.serializeUser((user, cb) => {
    process.nextTick(() => {
      cb(null, {id: user.id});
    });
  });

  passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user);
    });
  });
};

module.exports = strategyGoogle;
