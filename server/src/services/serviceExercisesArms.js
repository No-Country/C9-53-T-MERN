const ExercisesArmsDAO = require('../dao/exercisesArmsDAO');

const dao = new ExercisesArmsDAO();

class ServiceExercisesArms {
  async getAllExercises() {
    const listExercises = await dao.getAll();

    return listExercises;
  }

  static async createExercises(newExercise) {
    return 'esperando esquema';
  }

  static async updateExercise(datesExercise) {
    return 'esperando esquema';
  }

  static async deleteExercise(id) {
    return 'esperando esquema';
  }
}
module.exports = ServiceExercisesArms;
