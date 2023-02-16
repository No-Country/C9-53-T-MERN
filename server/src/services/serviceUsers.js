const usersDAO = require('../dao/usersDAO');

const dao = new usersDAO();

class serviceUsers {
  async saveUser(userSave) {
    if (!userSave.name) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'El campo name está vacío',
      };
    } else if (!userSave.email) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'El campo email está vacío',
      };
    } else if (!userSave.password) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'El campo password está vacío',
      };
    }

    return {
      message: 'Se registró el usuario con éxito',
      user: await dao.save(userSave),
    };
  }
}

module.exports = serviceUsers;