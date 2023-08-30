import express from 'express';
import {
    addComment,
    updateComment,
    deleteComment,
    getComment
} from '../controllers/comment.js'
import verifyToken from '../verifyToken.js';

const router = express.Router();

// here we will add the routes for the comments

router.post('/', verifyToken, addComment);

router.put('/:id', verifyToken, updateComment);

router.delete('/:id', verifyToken, deleteComment);

router.get('/:videoId', getComment);



export default router;

