const {Router} = require('express');
const passport = require('passport');

const routeAuthentication = Router();

const url_client = process.env.URL_CLIENT || 'http://localhost:3000';

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
    successRedirect: `${url_client}`,
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
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user,
      cookies: req.cookies,
    });
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
