import express from 'express';
import { signup, signin, googleSingin } from '../controllers/auth.js'

const router = express.Router();

// here we will add the routes for the auth

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleSingin)


export default router;

