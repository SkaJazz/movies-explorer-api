const mongoose = require('mongoose');

module.exports = {
  mongoose: mongoose.connect('mongodb://localhost:27017/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
};
