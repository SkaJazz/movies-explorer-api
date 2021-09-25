const { celebrate, Joi, Segments } = require('celebrate');
const validator = require('validator');

const isUrl = (val) => {
  if (!validator.isURL(val)) {
    throw new Error('Validation failed');
  }
  return val;
};

const isEmail = (val) => {
  if (!validator.isEmail(val)) {
    throw new Error('Validation failed');
  }
  return val;
};

const checkUserInfoUpdateValidity = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().custom(isEmail).required(),
    name: Joi.string().min(5).max(30).required(),
  }),
});

const checkSignUpCredValidity = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().custom(isEmail).required(),
    name: Joi.string().min(5).max(30).required(),
    password: Joi.string().required(),
  }),
});

const checkSignInCredValidity = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().custom(isEmail).required(),
    password: Joi.string().required(),
  }),
});

const checkMovieIdValidity = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

const checkMovieValidity = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().custom(isUrl),
      trailer: Joi.string().required().custom(isUrl),
      thumbnail: Joi.string().required().custom(isUrl),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  },
  {
    allowUnknown: true,
  },
);

module.exports = {
  checkSignUpCredValidity,
  checkSignInCredValidity,
  checkUserInfoUpdateValidity,
  checkMovieValidity,
  checkMovieIdValidity,
};
