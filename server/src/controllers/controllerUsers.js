const bcrypt = require('bcrypt');
const transporter = require('../../mailer');
const serviceUsers = require('../services/serviceUsers');

const service = new serviceUsers();

const controllerUsers = {
  saveUser: async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = {name, email, password }
    const hash = bcrypt.hashSync(password, 10);
    newUser.password = hash
    const isSaved = await service.saveUser(newUser);

    if (isSaved) {
      res.status(201).json({message: 'User created'});
      await transporter.sendMail({
        to: isSaved.user.email,
        from: 'diegogaraycullas@gmail.com',
        subject: 'Email confirmation',
        html: "<h1>Bienvenido a la mejor app de fitnes creada por C-5-M</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>"
      }
      );
    } else {
      res.status(400).json({ message: 'something wrong' });
    }
  },
};

module.exports = controllerUsers;
