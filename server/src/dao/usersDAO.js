const users = require('./schemas/users');

class usersDAO {
  async save() {
    const user = new users({
      name: 'manolo',
      email: 'manolo@mail.com',
      password: '1234',
    });

    user.save();

    return {message: 'aqui recibo el resultado de MongoDB'};
  }
}

module.exports = usersDAO;
