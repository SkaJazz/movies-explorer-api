const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./db/mongoose');

const app = express();
const { PORT = 3000 } = process.env;

const { createUser, login } = require('./controllers/users');

const { auth } = require('./middlewares/auth');
const { limiter } = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(limiter, helmet());
app.use(express.json(), cookieParser());

app.use(requestLogger);

app.post('/signup', createUser);
app.post('/signin', login);

app.use(errorLogger);

app.listen(PORT);
