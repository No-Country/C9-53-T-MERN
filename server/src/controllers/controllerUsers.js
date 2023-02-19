const serviceUsers = require('../services/serviceUsers');

const service = new serviceUsers();

const controllerUsers = {
  saveUser: async (req, res) => {
    const isSaved = await service.saveUser();

    res.json({message: isSaved});
  },
};

module.exports = controllerUsers;
