const mongoose = require('mongoose');

const collection = 'exercisesArms';

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
  fotoBanner: String,
  D: String,
  exercises: Array,
});

module.exports = mongoose.model(collection, schema);
