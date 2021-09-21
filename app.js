const express = require('express');
// const helmet = require('helmet');
// const cookieParser = require('cookie-parser');

const app = express();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
