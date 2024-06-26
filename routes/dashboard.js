const express = require('express');
const router = express.Router();
const dashboardCtrl = require('../controllers/dashboard');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Use ensureLoggedIn middleware to protect routes
// that should only be available to logged in users.

// GET dashboard
router.get('/', ensureLoggedIn, dashboardCtrl.index);

router.post('/:id/my-books', dashboardCtrl.addToMyBooks);

router.post('/my-books/:id', dashboardCtrl.removeFromMyBooks);

module.exports = router;
