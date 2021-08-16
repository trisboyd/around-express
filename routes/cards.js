const router = require('express').Router();
const getDataFromFile = require('../helpers/files');


router.get('/cards', (req, res) => {
  res.send(cards);
});