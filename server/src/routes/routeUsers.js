const {Router} = require('express');
const controllerUsers = require('../controllers/controllerUsers');

const routeUsuarios = Router();

// routeUsuarios.get('/', controllerUsers.getAll);

routeUsuarios.post('/', controllerUsers.saveUser);

module.exports = routeUsuarios;
