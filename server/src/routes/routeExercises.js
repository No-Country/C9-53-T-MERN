const { Router } = require('express');
const { getAllExercises, createExercises, updateExercise, deleteExercise } = require('../controllers/exercicios.controllers');

const routeExercises = Router();

routeExercises.get('/', getAllExercises);

routeExercises.post('/', createExercises);

routeExercises.put('/:id', updateExercise)

routeExercises.delete ('/:id', deleteExercise)

module.exports = routeExercises