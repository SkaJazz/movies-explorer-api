const express = require('express');
const helmet = require('helmet');
// const cookieParser = require('cookie-parser');

const app = express();

const { limiter } = require('./middlewares/limiter');

app.use(limiter, helmet());

const { PORT = 3000 } = process.env;

app.listen(PORT);
