const {Router} = require('express');
const passport = require('passport');

const routeAuthentication = Router();

routeAuthentication.get(
  '/auth/google',
  passport.authenticate('google', {scope: ['profile', 'email']})
);

routeAuthentication.get(
  '/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/'}),
  (req, res) => {
    const {user} = req;
    res.json({message: 'autenticado con Google', user});
  }
);

routeAuthentication.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    1;
    res.json({message: 'ha cerrado sesión con éxito'});
  });
});

module.exports = routeAuthentication;
