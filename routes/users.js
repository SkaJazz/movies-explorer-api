const router = require('express').Router();
const {
  updateUserInfo,
  getCurrentUserInfo,
} = require('../controllers/users');

const {
  checkUserInfoUpdateValidity,
} = require('../middlewares/validationHandlers');

router.get('/me', getCurrentUserInfo);
router.patch('/me', checkUserInfoUpdateValidity, updateUserInfo);

module.exports = router;
