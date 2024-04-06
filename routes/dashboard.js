const express = require('express');
const router = express.Router();
const dashboardCtrl = require('../controllers/dashboard');

// GET dashboard
router.get('/', dashboardCtrl.index);

module.exports = router;
