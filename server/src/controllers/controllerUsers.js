const serviceUsers = require('../services/serviceUsers');

const service = new serviceUsers();

const controllerUsers = {
  saveUser: async (req, res) => {
    const {name, email, password} = req.body;

    const isSaved = await service.saveUser({name, email, password});

    res.json(isSaved);
  },
};

module.exports = controllerUsers;
