const rateLimit = require('express-rate-limit');

module.exports = {
  limiter: rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
  }),
};
