const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { JWT_SECRET } = require('../utils/constants');

// CREATE USER
const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10).then((hashedPwd) => {
    User.create({
      name,
      email,
      password: hashedPwd,
    })
      .then(({ name: userName, email: userEmail }) => {
        res.send({ name: userName, email: userEmail });
      })
      .catch(next);
  });
};

// LOGIN

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .orFail(new Error('Not Authorized'))
    .then((user) => bcrypt.compare(password, user.password).then((matched) => {
      if (matched) {
        return res.send({
          token: jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: '7d',
          }),
        });
      }
      throw new Error('Not Authorized');
    }))
    .catch(next);
};

module.exports = {
  createUser,
  login,
};
