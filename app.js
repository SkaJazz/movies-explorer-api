const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

const { limiter } = require('./middlewares/limiter');

app.use(limiter, helmet());
app.use(express.json(), cookieParser());

const { PORT = 3000 } = process.env;

app.listen(PORT);
