import express from 'express';
import { signup, signin } from '../controllers/auth.js'

const router = express.Router();

// here we will add the routes for the auth

router.post('/signup', signup);
router.post('/signin', signin)


export default router;

