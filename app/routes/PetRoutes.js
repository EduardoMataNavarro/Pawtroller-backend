const express = require('express');
const router = express.Router();
const PetController = require('../controllers/PetController');

/*  GET routes  */
router.get('/', PetController.Index);
router.get('/pet/:id', PetController.GetById);
router.get('/getbylostdate/', PetController.GetByLostDateRange);
router.get('/getlostnearby/', PetController.GetLostNearby)

/*  POST routes  */
router.post('/create', PetController.Create);
router.post('/addmedia', PetController.AddMedia);

module.exports = router;