/* eslint-disable max-classes-per-file */
const {
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  DUPLICATE_EMAIL_CODE,
  GENERAL_SERVER_ERROR_CODE,
} = require('./constants');

class NotFoundError extends Error {
  constructor(args) {
    super(args);
    this.message = 'Данные не найдены';
    this.statusCode = NOT_FOUND_ERROR_CODE;
  }
}

class UnathorizedError extends Error {
  constructor(args) {
    super(args);
    this.message = 'Необходима авторизация';
    this.statusCode = UNAUTHORIZED_ERROR_CODE;
  }
}

class ForbiddenError extends Error {
  constructor(args) {
    super(args);
    this.message = 'Недостаточно прав для совершения действия';
    this.statusCode = FORBIDDEN_ERROR_CODE;
  }
}

class ValidationError extends Error {
  constructor(args) {
    super(args);
    this.message = 'Переданы неверные данные';
    this.statusCode = BAD_REQUEST_ERROR_CODE;
  }
}

class DuplicateEmailError extends Error {
  constructor(args) {
    super(args);
    this.message = 'Пользователь с таким электронным адресом уже зарегистрирован';
    this.statusCode = DUPLICATE_EMAIL_CODE;
  }
}

class GeneralError extends Error {
  constructor(args) {
    super(args);
    this.message = 'На сервере произошла ошибка';
    this.statusCode = GENERAL_SERVER_ERROR_CODE;
  }
}

module.exports = {
  NotFoundError,
  ValidationError,
  DuplicateEmailError,
  GeneralError,
  UnathorizedError,
  ForbiddenError,
};
