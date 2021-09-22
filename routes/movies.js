const router = require('express').Router();
const {
  // getMovies,
  createMovie,
  // removeMovie,
} = require('../controllers/movies');

// const {
//   checkMovieValidity,
//   checkMovieIdValidity,
// } = require('../middlewares/validateHandlers');

// router.get('/', getAllCards);
router.post('/', createMovie);
// router.delete('/:cardId', checkCardIdValidity, removeCard);

module.exports = router;
