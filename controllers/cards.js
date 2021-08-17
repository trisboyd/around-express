const getDataFromFile = require('../helpers/files');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  getDataFromFile(dataPath)
    .then(cards =>
      res.status(200).send(cards))
    .catch(err => { status(400).send(err) })
}

module.exports = getCards;