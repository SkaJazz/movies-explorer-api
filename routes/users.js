const router = require('express').Router();
const {
  // getUserById,
  updateUserInfo,
  // updateUserAvatar,
  getCurrentUserInfo,
} = require('../controllers/users');

// const {
//   checkUserIdValidity,
//   checkUserInfoUpdateValidity,
//   checkUserInfoUpdateAvatarValidity,
// } = require('../middlewares/validateHandlers');

router.get('/me', getCurrentUserInfo);
router.patch('/me', updateUserInfo);
// router.get('/:userId', checkUserIdValidity, getUserById);
// router.patch('/me/avatar', checkUserInfoUpdateAvatarValidity, updateUserAvatar);

module.exports = router;
