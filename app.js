const http = require('http');
const express = require('express');
const routes = require('./routes');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

const server = http.createServer((request, response) => {
  console.log('server on');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});