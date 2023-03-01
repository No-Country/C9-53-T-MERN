const bcrypt = require('bcrypt');
const serviceUsers = require('../services/serviceUsers');

const service = new serviceUsers();

const controllerUsers = {
  getAll: async (req, res) => {
    const users = await service.getAll();

    res.json(users);
  },

  saveUser: async (req, res) => {
    const {email, password} = req.body;

    const hash = bcrypt.hashSync(password, 10);

    const isSaved = await service.saveUser({email, password: hash});

    if (isSaved.code) {
      res.status(201).json(isSaved);
    } else {
      res.status(400).json(isSaved);
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
};

module.exports = controllerUsers;
