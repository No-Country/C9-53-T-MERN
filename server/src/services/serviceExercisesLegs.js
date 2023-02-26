const ExercisesLegsDAO = require('../dao/exercisesLegsDAO');

const dao = new ExercisesLegsDAO();

class ServiceExercisesLegs {
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
module.exports = ServiceExercisesLegs;
