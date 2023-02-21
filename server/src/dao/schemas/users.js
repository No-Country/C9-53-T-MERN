const mongoose = require('mongoose');

const collection = 'users';

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Diego
 *         email:
 *           type: string
 *           example: diegogaray@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 */

const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  id_facebook: String,
});

module.exports = mongoose.model(collection, schema);
