import express from 'express';
import { router } from express.Router();
import AuthController from '../controllers/AuthController';

router.get('/', AuthController.Index);


module.exports = router;