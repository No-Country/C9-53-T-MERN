const users = require('./schemas/users');

class usersDAO {
  async getAll() {
    return await users.find();
  }

  async save(userSave) {
    const user = new users(userSave);

    return await user.save();
  }

  async update(userUpdate) {
    const {id, name, email, password} = userUpdate;

    const result = await users.updateOne({id}, {name, email, password});

    return result;
  }

  async delete(id) {
    const result = await users.deleteOne({id});

    return result;
  }
}

module.exports = usersDAO;
