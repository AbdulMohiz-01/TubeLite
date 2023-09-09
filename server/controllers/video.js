import Video from "../models/video.js";
import User from "../models/user.js";

const createVideo = async (request, response, next) => {
    // request.user._id is the id of the user who is creating the video
    // request.body is the video object

    const videoInfo = request.body
    const userId = request.user._id
    const video = new Video({ ...videoInfo, userId: userId })

    try {
        const savedVideo = await video.save()
        response.status(200).json(savedVideo)
    } catch (err) {
        next(err)
    }
}

const updateVideo = async (request, response, next) => {
    // request.user._id is the id of the user who is updating the video
    // request.params.id is the id of the video which we want to update
    // request.body is the updated video object

    try {
        const video = await Video.findById(request.params.id)
        if (!video) {
            return response.status(404).json("Video not found...")
        }
        if (video.userId === request.user._id) {
            const updatedVideo = await Video.findByIdAndUpdate(request.params.id, {
                $set: request.body,
            }, { new: true })
            response.status(200).json(updatedVideo)
        } else {
            return response.status(403).json("You can update only your video...")
        }
    } catch (err) {
        next(err)
    }
}

const deleteVideo = async (request, response, next) => {
    // request.user._id is the id of the user who is deleting the video
    // request.params.id is the id of the video which we want to delete

    try {
        const video = await Video.findById(request.params.id);
        if (!video) {
            return response.status(404).json("Video not found...");
        }
        if (video.userId === request.user._id) {
            await video.delete()
            response.status(200).json("Video has been deleted...");
        } else {
            return response.status(403).json("You can delete only your video...");
        }
    } catch (err) {
        next(err)
    }
}

const getVideo = async (request, response, next) => {
    try {
        console.log("Im in server")
        const video = await Video.findById(request.params.id)
        if (!video) {
            return response.status(404).json("Video not found...")
        }
        response.status(200).json(video)
    } catch (err) {
        next(err)
    }
}

const addView = async (request, response, next) => {
    // request.params.id is the id of the video which we want to add view

    try {
        const video = await Video.findById(request.params.id)
        if (!video) {
            return response.status(404).json("Video not found...")
        }
        const updatedVideo = await Video.findByIdAndUpdate(request.params.id, {
            $inc: { views: 1 }
        }, { new: true })
        response.status(200).json(updatedVideo)
    } catch (err) {
        next(err)
    }
}

const getTrendingVideos = async (request, response, next) => {
    // request.user._id is the id of the user who is requesting for the trending videos

    try {
        const videos = await Video.find().sort({ views: -1 }).limit(40)
        response.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

const getRandomVideos = async (request, response, next) => {
    // request.user._id is the id of the user who is requesting for the random videos

    try {
        const videos = await Video.aggregate([
            {
                $sample: { size: 40 }
            }
        ])
        response.status(200).json(videos)
    } catch (err) {
        next(err)
    }
}

const getSubscribedVideos = async (request, response, next) => {
    console.log(request.user)
    const userId = request.user._id

    try {
        const user = await User.findById(userId)
        const videos = await Video.find({ userId: { $in: user.subscribedUsers } })
        response.status(200).json(videos.sort((a, b) => b.createdAt - a.createdAt))
    } catch (err) {
        next(err)
    }
}

const getVideosByTag = async (request, response, next) => {
    const tags = request.query.tags.split(',')
    try {
        const videos = await Video.find({ tags: { $in: tags } })
        response.status(200).json(videos.sort((a, b) => b.createdAt - a.createdAt))
    } catch (err) {
        next(err)
    }
}

const getVideosBySearch = async (request, response, next) => {
    const q = request.query.q
    try {
        const videos = await Video.find({ title: { $regex: q, $options: 'i' } })
        response.status(200).json(videos.sort((a, b) => b.createdAt - a.createdAt))
    } catch (err) {
        next(err)
    }
}



export {
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
}