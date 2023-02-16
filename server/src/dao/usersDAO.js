const users = require('./schemas/users');

class usersDAO {
  async save(userSave) {
    const user = new users(userSave);

    return await user.save();
  }
}

module.exports = usersDAO;
