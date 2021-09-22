const router = require('express').Router();
const {
  getUsersMovies,
  createMovie,
  // removeMovie,
} = require('../controllers/movies');

// const {
//   checkMovieValidity,
//   checkMovieIdValidity,
// } = require('../middlewares/validateHandlers');

router.get('/', getUsersMovies);
router.post('/', createMovie);
// router.delete('/:cardId', checkCardIdValidity, removeCard);

module.exports = router;
