const user = require('../models/user');
const { checkError } = require('./constants');

// function for getting user from database
module.exports.getUser = (req, res) => {
  user.find({})
    .then((users) => res.send({ data: users }))
    .catch((error) => checkError(error, res));
};

module.exports.getProfile = (req, res) => {
  user.findById(req.params.id)
    .then((userProfile) => res.send({ data: userProfile }))
    .catch((error) => checkError(error, res));
};

module.exports.createUser = (req, res) => {
  const {
    name, about, avatar,
  } = req.body;
  user.create({
    name, about, avatar,
  })
    .then((newUser) => res.send({ data: newUser }))
    .catch((error) => checkError(error, res));
};

module.exports.updateProfile = (req, res) => {
  const {
    name, about,
  } = req.body;
  user.findByIdAndUpdate(req.user._id, { name, about },
    {
      new: true,
      runValidators: true,
    })
    .then(res.send({ data: user }))
    .catch((error) => checkError(error, res));
};

module.exports.updateAvatar = (req, res) => {
  const {
    avatar,
  } = req.body;
  user.findByIdAndUpdate(req.user._id, { avatar },
    {
      new: true,
      runValidators: true,
    })
    .then(res.send({ data: user }))
    .catch((error) => checkError(error, res));
};
