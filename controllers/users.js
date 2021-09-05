const user = require('../models/user');
const checkError = require('./constants');

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
  user.findByIdAndUpdate(req.user._id, { name, about })
    .then(res.send({ data: user }))
    .catch((error) => checkError(error, res));
};

module.exports.updateAvatar = (req, res) => {
  const {
    avatar,
  } = req.body;
  user.findByIdAndUpdate(req.user._id, { avatar })
    .then(res.send({ data: user }))
    .catch((error) => checkError(error, res));
};

// OLD CODE_______________________________________________________________________________
// const path = require('path');
// const getDataFromFile = require('../helpers/files');

// const dataPath = path.join(__dirname, '..', 'data', 'users.json');

// // function for sending all users to requestee
// const getUsers = (req, res) => {
//   getDataFromFile(dataPath)
//     .then((users) => res.status(200).send(users))
//     .catch((err) => res.status(500).send(err));
// };

// // function for sending specific user specified in url to requestee
// const getProfile = (req, res) => {
//   getDataFromFile(dataPath)
//     .then((users) => users.find((user) => user._id === req.params.id))
//     .then((user) => {
//       if (user) {
//         return res.status(200).send(user);
//       }
//       return res.status(404).send({ message: 'User ID not found' });
//     })
//     .catch((err) => { res.status(500).send(err); });
// };

// module.exports = { getUsers, getProfile };
