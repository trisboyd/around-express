const getDataFromFile = require('../helpers/files');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

// function for sending cards to requestee
const getCards = (req, res) => {
  getDataFromFile(dataPath)
    .then(cards =>
      res.status(200).send(cards))
    .catch(err => { status(500).send(err) })
}

module.exports = getCards;