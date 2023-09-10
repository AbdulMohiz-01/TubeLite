import express from 'express';
import { getKeyByName } from '../controllers/key.js';

const router = express.Router();


router.get('/find/:name', getKeyByName);


export default router;