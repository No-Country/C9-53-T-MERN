const {Router} = require('express');
const controllerUsers = require('../controllers/controllerUsers');
const  schema  = require('../dao/schemas/users');

const routeUsuarios = Router();

routeUsuarios.get('/users', (req, res) => {
  schema.find().then((data)=>res.json(data))
  });

routeUsuarios.post('/users', controllerUsers.saveUser);

module.exports = routeUsuarios;
