const usersDAO = require('../dao/usersDAO');
const transporter = require('../utils/mailer');

const dao = new usersDAO();

class serviceUsers {
  async getAll() {
    return await dao.getAll();
  }

  async saveUser(userSave) {
    if (!userSave.email) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'El campo email está vacío',
        code: 0,
      };
    } else if (!userSave.password) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'El campo password está vacío',
        code: 0,
      };
    }

    const listUsers = await dao.getAll();

    let userComparate;
    listUsers.forEach(
      (user) => user.email === userSave.email && (userComparate = user)
    );

    if (userComparate) {
      return {
        error: 'No se pudo registrar usuario',
        message: 'Ya existe el correo',
        code: 2,
      };
    }

    await transporter.sendMail({
      to: userSave.email,
      from: 'diegogaraycullas@gmail.com',
      subject: 'Email confirmation',
      html: "<h1>Bienvenido a la mejor app de fitnes creada por C-5-M</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
    });

    return {
      message: 'Se registró el usuario con éxito',
      user: await dao.save(userSave),
      code: 1,
    };
  }

  async update(userUpdate) {
    const result = await dao.update(userUpdate);

    return result;
  }

  async delete(id) {
    const result = await dao.delete(id);

    return result;
  }
}

module.exports = serviceUsers;
