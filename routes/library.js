const express = require('express');
const router = express.Router();
const libraryCtrl = require('../controllers/library');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /library
router.get('/', ensureLoggedIn, libraryCtrl.index);

// Get /library/:id
router.get('/:id', ensureLoggedIn, libraryCtrl.show);
module.exports = router;
