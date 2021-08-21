const router = require('express').Router();
const { getUsers, getProfile } = require('../controllers/users');

// gets all users
router.get('/users', getUsers);

// gets specific user based on id provided in url
router.get('/users/:id', getProfile);

module.exports = router;
