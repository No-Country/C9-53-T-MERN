const mongoose = require('mongoose');

const collection = 'users';

const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model(collection, schema);