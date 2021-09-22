const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../utils/constants');

console.log(JWT_SECRET);

module.exports = {
  auth: (req, res, next) => {
    const token = req.headers
      && req.headers.authorization
      && req.headers.authorization.replace('Bearer ', '');
    if (!token) {
      return next(new Error('Not Authorized'));
    }

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return next(new Error('Not Authorized'));
    }

    req.user = { _id: payload._id };
    return next();
  },
};
