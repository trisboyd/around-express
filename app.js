const http = require('http');
const express = require('express');
const usersRouter = require('./routes/users.js');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

const server = http.createServer((request, response) => {
  console.log('server on');
});

app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});