const express = require('express');
const router = express.Router();
const openedBookCtrl = require('../controllers/opened-book');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, openedBookCtrl.index);

router.get('/:id', ensureLoggedIn, openedBookCtrl.show);

module.exports = router;
