const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const errorRouter = require('./routes/errors');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', usersRouter);

app.use('/', cardsRouter);

app.use('*', errorRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
