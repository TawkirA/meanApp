const authController = require('../controllers/auth');
const profileController = require('../controllers/profile');
const jwt = require('express-jwt');

const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload',
    algorithms: ['RS256']
})

const express = require('express');
const router = express.Router();

// Profile
router.get('/profile', auth, profileController.getProfile);

// Auth
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;

