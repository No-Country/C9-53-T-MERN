const exercisesDAO = require('../dao/exercisesDAO');

const dao = new exercisesDAO();

class exercisesServices {
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
module.exports = exercisesServices;
