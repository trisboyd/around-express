const router = require('express').Router();

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/cards', (req, res) => {
  res.send(cards);
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
