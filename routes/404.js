const router = require('express').Router();

router.use((req, res, next) => next(new Error('Not found')));

module.exports = router;
