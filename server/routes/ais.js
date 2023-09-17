import express from 'express';

const router = express.Router();

import { generateBoth, generateTags, generateDesc } from '../controllers/ai.js';
import verifyToken from '../verifyToken.js';

router.post('/generate', verifyToken, generateBoth);

router.post('/generate/tags', verifyToken, generateTags);

router.post('/generate/desc', verifyToken, generateDesc);


export default router;