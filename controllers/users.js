const bcrypt = require('bcryptjs');
const User = require('../models/user');

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

module.exports = {
  createUser,
};
