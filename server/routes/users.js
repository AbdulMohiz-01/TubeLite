import express from 'express';
import {
    updateUser,
    deleteUser,
    getUser,
    getBatchUsers,
    subscribeUser,
    unsubscribeUser,
    likeVideo,
    dislikeVideo,
} from '../controllers/user.js';
import verifyToken from '../verifyToken.js';

const router = express.Router();

/**
 * These are the routes for the user like update, delete, subscribe, unsubscribe, like, dislike, comment
*/


// update user
router.put('/:id', verifyToken, updateUser); // id will be the id of the user

// delete user
router.delete('/:id', verifyToken, deleteUser); // id will be the id of the user

// get user
router.get('/find/:id', getUser); // id will be the id of the user

// get batch of users
router.get('/batch/find/:users', getBatchUsers); // id will be the ids' of the user

// subscribe to user
router.put("/sub/:id", verifyToken, subscribeUser); // id will be the id of the user to whom we want to subscribe

// unsubscribe to user
router.put("/unsub/:id", verifyToken, unsubscribeUser); // id will be the id of the user to whom we want to unsubscribe

// like a video
router.put("/like/:videoId", verifyToken, likeVideo);

// dislike a video
router.put("/dislike/:videoId", verifyToken, dislikeVideo);




export default router;

