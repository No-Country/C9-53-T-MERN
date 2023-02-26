const {Router} = require('express');
const {
  getAllExercises,
  createExercises,
  updateExercise,
  deleteExercise,
} = require('../controllers/controllerExercicesAbs');

const routeExercisesAbs = Router();

routeExercisesAbs.get('/', getAllExercises);

routeExercisesAbs.post('/', createExercises);

routeExercisesAbs.put('/:id', updateExercise);

routeExercisesAbs.delete('/:id', deleteExercise);

module.exports = routeExercisesAbs;
