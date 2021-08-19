const getDataFromFile = require('../helpers/files');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

// function for sending all users to requestee
const getUsers = (req, res) => {
  getDataFromFile(dataPath)
    .then(users =>
      res.status(200).send(users))
    .catch(err => res.status(400).send(err))
}


// function for sending specific user specified in url to requestee
const getProfile = (req, res) => {
  getDataFromFile(dataPath)
    .then(users => {
      return users.find(user =>
        user._id === req.params.id)
    })
    .then(user => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: "User ID not found" })
    })
    .catch(err => { res.send(err) })
}

module.exports = { getUsers, getProfile };