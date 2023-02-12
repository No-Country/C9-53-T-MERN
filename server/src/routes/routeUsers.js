const {Router} = require('express');
const passport = require('passport');
const controllerUsers = require('../controllers/controllerUsers');

const routeUsuarios = Router();

routeUsuarios.get('/', controllerUsers.getAll);

routeUsuarios.post('/', controllerUsers.saveUser);

routeUsuarios.post('/update', controllerUsers.update);

routeUsuarios.delete('/', controllerUsers.delete);

module.exports = routeUsuarios;
