const mongoose = require('mongoose');
const { HOST } = require('../utils/constants');

module.exports = {
  mongoose: mongoose.connect(`mongodb://${HOST}:27017/moviesdb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
};
