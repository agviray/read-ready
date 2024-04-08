const express = require('express');
const router = express.Router();
const accountCtrl = require('../controllers/account');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /account
router.get('/', ensureLoggedIn, accountCtrl.index);

module.exports = router;
