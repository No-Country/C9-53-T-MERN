const exercisesServices = require("../services/exercises.services");


const exercisesController = {
  getAllExercises: async (req, res) => {
    const exercises = await exercisesServices.getAllExercises();

    res.json(exercises);
  },

  createExercises: async (req, res) => {
    // const{}=req.body
    // const newExercise ={}
    const dataNewExercise = await exercisesServices.createExercises();
    res.status(201).json(dataNewExercise);
  },

  updateExercise: async (req, res) => {
    // const { id } = req.params
    // const { dates } = req.body
    // const datesExercise = {id, dates}
    const modifedExercise = await exercisesServices.updateExercise()
    res.json(modifedExercise);
  },

  deleteExercise: async (req, res) => {
    // const { id } = req.params
    const exerciseDeleted = await exercisesServices.deleteExercise()
    res.json(exerciseDeleted);
  }
}
module.exports = exercisesController;