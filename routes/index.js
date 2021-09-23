const router = require('express').Router();

const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const {
  checkSignUpCredValidity,
  checkSignInCredValidity,
} = require('../middlewares/validationHandlers');

router.post('/signup', checkSignUpCredValidity, createUser);
router.post('/signin', checkSignInCredValidity, login);

router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));

router.use(require('./404'));

module.exports = router;
