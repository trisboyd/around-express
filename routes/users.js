const router = require('express').Router();
const getDataFromFile = require('../helpers/files');

// This is an example of how to have files that parse data and link to them to send to the browser when requested
// _______________________________________________________________________
router.get('/users', (req, res) => {
  // getDataFromFile('user DATA FILE GOES HERE')
  // .then(users => res.status(200).send(users))
  // .catch(err => res.status(400).send(err));

  res.send('users'); //need to get all data from users.json
});


router.get('/users/:id', (req, res) => {
  if(!users[req.params.id]) {
     res.send({
     error: "User ID not found"})
  return;
     }
  res.send(users[req.params.id]);
});

module.exports = router;
