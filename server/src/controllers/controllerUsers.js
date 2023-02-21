const bcrypt = require('bcrypt');
const transporter = require('../../mailer');
const serviceUsers = require('../services/serviceUsers');

const service = new serviceUsers();

const controllerUsers = {
  getAll: async (req, res) => {
    const users = await service.getAll();

    res.json(users);
  },

  saveUser: async (req, res) => {
    const {name, email, password} = req.body;

    const hash = bcrypt.hashSync(password, 10);

    const isSaved = await service.saveUser({name, email, password: hash});

    if (isSaved) {
      res.status(201).json(isSaved);

      await transporter.sendMail({
        to: isSaved.user.email,
        from: 'diegogaraycullas@gmail.com',
        subject: 'Email confirmation',
        html: "<h1>Bienvenido a la mejor app de fitnes creada por C-5-M</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
      });
    } else {
      res.status(400).json({message: 'something wrong'});
    }
  },

  update: async (req, res) => {
    const {id, name, email, password} = req.body;

    const isUpdated = await service.update({id, name, email, password});

    res.json(isUpdated);
  },

  delete: async (req, res) => {
    const {id} = req.body;

    const isDeleted = await service.delete({id});

    res.json(isDeleted);
  },

  saveUser: async (req, res) => {},
};

module.exports = controllerUsers;
