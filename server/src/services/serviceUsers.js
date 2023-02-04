const usersDAO = require('../dao/usersDAO');

const dao = new usersDAO();

class serviceUsers {
  async saveUser() {
    return await dao.save();
  }
}

module.exports = serviceUsers;
