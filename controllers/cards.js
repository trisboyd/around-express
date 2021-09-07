const card = require('../models/card');
const { checkError } = require('./checkError');

// function for getting cards from database
module.exports.getCards = (req, res) => {
  card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((error) => checkError(error, res));
};

// function for creating cards
module.exports.createCard = (req, res) => {
  console.log(req.user._id);
  const {
    name, link,
  } = req.body;
  card.create({
    name, link,
  })
    .then((cards) => res.send({ data: cards }))
    .catch((error) => checkError(error, res));
};

// function for deleting a card
module.exports.deleteCard = (req, res) => {
  card.findByIdAndRemove(req.user._id).orFail(() => { res.status(404).send({ message: 'Card does not exist' }); })
    .then((cards) => res.send({ data: cards }))
    .catch((error) => checkError(error, res));
};

module.exports.likeCard = (req, res) => {
  card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // add _id to the array if it's not there yet
    { new: true },
  ).orFail(() => { res.status(404).send({ message: 'Card does not exist' }); });
};

module.exports.dislikeCard = (req, res) => {
  card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id from the array
    { new: true },
  ).orFail(() => { res.status(404).send({ message: 'Card does not exist' }); });
};
