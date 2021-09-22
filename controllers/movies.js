const Movie = require('../models/movie');

// GET USER'S MOVIES
const getUsersMovies = (req, res, next) => Movie.find({ owner: req.user._id })
  .orFail(new Error('Not found'))
  .then((movies) => res.send({ movies }))
  .catch(next);

// CREATE MOVIE
const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const userId = req.user._id;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: userId,
  })
    .then((movie) => res.send(movie))
    .catch(next);
};

module.exports = {
  getUsersMovies,
  createMovie,
};
