const card = require('../models/card');

// function for getting cards from database
module.exports.getCards = (req, res) => {
  card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

// function for creating cards
module.exports.createCard = (req, res) => {
  const {
    name, owner, likes, link, createdAt,
  } = req.body;
  card.create({
    name, owner, likes, link, createdAt,
  })
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

// function for deleting a card
module.exports.deleteCard = (req, res) => {
  const {
    id,
  } = req.user;
  card.findByIdAndRemove(id)
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Error' }));
};

// OLD CODE FROM LAST PROJECT______________________________

// const path = require('path');
// const getDataFromFile = require('../helpers/files');

// const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

// // function for sending cards to requestee
// const getCards = (req, res) => {
//   getDataFromFile(dataPath)
//     .then((cards) => res.status(200).send(cards))
//     .catch((err) => { res.status(500).send(err); });
// };

// module.exports = getCards;
