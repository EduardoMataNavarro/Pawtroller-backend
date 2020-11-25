const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.Login);
router.post('/signup', AuthController.Signup);
router.post('/update', AuthController.UpdateUser);

module.exports = router;