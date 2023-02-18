const {Router} = require('express');
const passport = require('passport');

const routeAuthentication = Router();

const CLIENT_URL = 'http://localhost:3000';

/* -------------------------------------------------------------------------- */
/*                                   GOOGLE                                   */
/* -------------------------------------------------------------------------- */

routeAuthentication.get(
  '/auth/google',
  passport.authenticate('google', {scope: ['profile', 'email']})
);

routeAuthentication.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    successRedirect: CLIENT_URL,
  })
);

/* -------------------------------------------------------------------------- */
/*                                  FACEBOOK                                  */
/* -------------------------------------------------------------------------- */

routeAuthentication.get('/auth/facebook', passport.authenticate('facebook'));

routeAuthentication.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  (req, res) => {
    res.redirect('/users');
  }
);

/* -------------------------------------------------------------------------- */
/*                                    LOCAL                                   */
/* -------------------------------------------------------------------------- */

routeAuthentication.post(
  '/auth/local',
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/users',
  })
);

routeAuthentication.get('/login/session', (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({user: req.user, cookies: req.session.cookie});
  }
});

routeAuthentication.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({session: false, message: 'Ha cerrado sesión con éxito'});
  });
});

module.exports = routeAuthentication;
