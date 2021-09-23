const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
require('./db/mongoose');
const { PORT } = require('./utils/constants');

const app = express();

const { createUser, login } = require('./controllers/users');

const { auth } = require('./middlewares/auth');
const { limiter } = require('./middlewares/limiter');
const { errorHandler, errorSender } = require('./middlewares/errorHandlers');
const { checkSignUpCredValidity, checkSignInCredValidity } = require('./middlewares/validationHandlers');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(requestLogger);

app.use(limiter, helmet(), cors({
  credentials: true,
  origin: '*',
}));
app.use(express.json(), cookieParser());

app.post('/signup', checkSignUpCredValidity, createUser);
app.post('/signin', checkSignInCredValidity, login);

app.use('/users', auth, require('./routes/users'));
app.use('/movies', auth, require('./routes/movies'));

app.use(require('./routes/404'));

app.use(errorLogger);

app.use(errorHandler, errorSender);

app.listen(PORT);
