const {Router} = require('express');
const passport = require('passport');

const routeAuthentication = Router();

routeAuthentication.get(
  '/auth/google',
  passport.authenticate('google', {scope: ['profile']})
);

routeAuthentication.get(
  '/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/'}),
  (req, res) => {
    const {user} = req;
    res.json({message: 'autenticado con Google', user});
  }
);

module.exports = routeAuthentication;
