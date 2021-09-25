const router = require('express').Router();
const {
  getUsersMovies,
  createMovie,
  removeMovie,
} = require('../controllers/movies');

const {
  checkMovieValidity,
  checkMovieIdValidity,
} = require('../middlewares/validationHandlers');

router.get('/', getUsersMovies);
router.post('/', checkMovieValidity, createMovie);
router.delete('/:movieId', checkMovieIdValidity, removeMovie);

module.exports = router;
