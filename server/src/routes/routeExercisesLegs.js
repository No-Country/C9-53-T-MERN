const {Router} = require('express');
const {
  getAllExercises,
  createExercises,
  updateExercise,
  deleteExercise,
} = require('../controllers/controllerExercicesLegs');

const routeExercisesLegs = Router();

routeExercisesLegs.get('/', getAllExercises);

routeExercisesLegs.post('/', createExercises);

routeExercisesLegs.put('/:id', updateExercise);

routeExercisesLegs.delete('/:id', deleteExercise);

module.exports = routeExercisesLegs;
