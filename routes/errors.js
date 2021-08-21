const router = require('express').Router();
const errorMessage = require('../controllers/errors.js');

router.get('*', errorMessage);

module.exports = router;
