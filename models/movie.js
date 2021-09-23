const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: '{VALUE} is not a valid URL to be an image link',
      },
    },
    trailer: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: '{VALUE} is not a valid URL to be a trailer link',
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: '{VALUE} is not a valid URL to be a thumbnail link',
      },
    },
    owner: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
