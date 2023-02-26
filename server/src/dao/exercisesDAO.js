const exercises = require('./schemas/exercises');

class exercisesDAO {
  async getAll() {
    return await exercises.find();
  }

  // async save(exerciseSave) {
  //   const exercise = new exercises(exerciseSave);

  //   return await exercise.save();
  // }

  // async update(exerciseUpdate) {
  //   const {id, name, email, password} = exerciseUpdate;

  //   const result = await exercises.updateOne({id}, {name, email, password});

  //   return result;
  // }

  // async delete(id) {
  //   const result = await exercises.deleteOne({id});

  //   return result;
  // }
}

module.exports = exercisesDAO;
