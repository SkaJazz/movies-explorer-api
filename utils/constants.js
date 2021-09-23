const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secretkey';
const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
const HOST = process.env.NODE_ENV === 'production' ? process.env.HOST : 'localhost';

const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZED_ERROR_CODE = 401;
const FORBIDDEN_ERROR_CODE = 403;
const NOT_FOUND_ERROR_CODE = 404;
const DUPLICATE_EMAIL_CODE = 409;
const GENERAL_SERVER_ERROR_CODE = 500;

module.exports = {
  PORT,
  HOST,
  JWT_SECRET,
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  DUPLICATE_EMAIL_CODE,
  GENERAL_SERVER_ERROR_CODE,
};
