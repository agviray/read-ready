const express = require('express');
const router = express.Router();
const libraryCtrl = require('../controllers/library');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /library
router.get('/', ensureLoggedIn, libraryCtrl.index);

module.exports = router;
