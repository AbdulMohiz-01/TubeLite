import express from 'express';
import {
    createVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    addView,
    getTrendingVideos,
    getRandomVideos,
    getSubscribedVideos,
    getVideosByTag,
    getVideosBySearch
} from '../controllers/video.js'
import verifyToken from '../verifyToken.js';

const router = express.Router();

// here we will add the routes for the videos

// create a video
router.post('/', verifyToken, createVideo);

// update a video
router.put('/:id', verifyToken, updateVideo);

// delete a video
router.delete('/:id', verifyToken, deleteVideo);

// get a video
router.get('/find/:id', getVideo);

router.put('/view/:id', addView);

router.get('/trending', getTrendingVideos);

router.get('/random', getRandomVideos);

router.get('/subscribed', verifyToken, getSubscribedVideos);

router.get('/tags/', getVideosByTag);

router.get('/search/', getVideosBySearch);
export default router;

