const {
  NotFoundError,
  ValidationError,
  DuplicateEmailError,
  GeneralError,
  UnathorizedError,
  ForbiddenError,
} = require('../utils/errors');

module.exports = {
  errorHandler: (err, req, res, next) => {
    if (err.message === 'Not Authorized') {
      return next(new UnathorizedError());
    }
    if (err.message === 'Forbidden') {
      return next(new ForbiddenError());
    }
    if (err.message === 'Not found') {
      return next(new NotFoundError());
    }
    if (err.code === 11000) {
      return next(new DuplicateEmailError());
    }
    if (
      err.name === 'ValidationError'
      || err.name === 'CastError'
      || err.message === 'Validation failed'
    ) {
      return next(new ValidationError());
    }
    return next(new GeneralError());
  },
  // eslint-disable-next-line no-unused-vars
  errorSender: (err, req, res, next) => res.status(err.statusCode).send({
    message: err.message,
  }),
};
