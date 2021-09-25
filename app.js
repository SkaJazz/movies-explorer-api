const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
require('./db/mongoose');
const { PORT } = require('./utils/constants');

const app = express();

const { limiter } = require('./middlewares/limiter');
const { errorHandler, errorSender } = require('./middlewares/errorHandlers');
const { requestLogger, errorLogger } = require('./middlewares/logger');

app.use(requestLogger);

app.use(limiter, helmet(), cors({
  credentials: true,
  origin: '*',
}));
app.use(express.json(), cookieParser());

app.use('/', require('./routes/index'));

app.use(errorLogger);

app.use(errorHandler, errorSender);

app.listen(PORT);
