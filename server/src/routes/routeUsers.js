const {Router} = require('express');
const controllerUsers = require('../controllers/controllerUsers');
const  schema  = require('../dao/schemas/users');

const routeUsuarios = Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: create a new user into application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: Created
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: Validation error
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 */

routeUsuarios.get('/users', (req, res) => {
  schema.find().then((data)=>res.json(data))
  });

routeUsuarios.post('/users', controllerUsers.saveUser);

module.exports = routeUsuarios;
