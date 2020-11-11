import express from 'express';
import { router } from express.Router();
import PetController from '../controllers/PetController';

router.get('/', PetController.Index);


module.exports = router;