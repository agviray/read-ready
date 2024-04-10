const express = require('express');
const router = express.Router();
const libraryCtrl = require('../controllers/library');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /library
router.get('/', ensureLoggedIn, libraryCtrl.index);

// GET /library/:id
// - This route is for a single, specific library book
//   identified by the book's id.
router.get('/:id', ensureLoggedIn, libraryCtrl.show);
module.exports = router;
