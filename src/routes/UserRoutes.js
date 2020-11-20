const express = require('express');
const router = express.Router();

const AuthToken = require('../controllers/middleware/AuthorizeToken');
const UserController = require('../controllers/UserController');
const AuthUserController = require('../controllers/AuthController');


/* GET routes */
router.get('/', UserController.Index);
router.get('/:id', UserController.GetById);
router.get('/pets/:id', UserController.GetPets);

/* POST routes */

module.exports = router;