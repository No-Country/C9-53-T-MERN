const {Router} = require('express');
const {
  getAllExercises,
  createExercises,
  updateExercise,
  deleteExercise,
} = require('../controllers/controllerExercicesArms');

const routeExercisesArms = Router();

routeExercisesArms.get('/', getAllExercises);

routeExercisesArms.post('/', createExercises);

routeExercisesArms.put('/:id', updateExercise);

routeExercisesArms.delete('/:id', deleteExercise);

module.exports = routeExercisesArms;
