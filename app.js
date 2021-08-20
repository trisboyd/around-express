const express = require('express');
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');
const errorRouter = require('./routes/errors.js');
const { PORT = 3000 } = process.env;

const app = express();

app.use('/', usersRouter);

app.use('/', cardsRouter);

app.use('*', errorRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});