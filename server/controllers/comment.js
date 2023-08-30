import Comment from "../models/Comment.js"
import Video from "../models/video.js"

const addComment = async (request, response, next) => {
    // request.user._id is the id of the user who is adding the comment
    // request.params.videoId is the id of the video to which we are adding the comment
    try {
        const video = await Video.findById(request.body.videoId)
        if (!video) {
            return response.status(404).json("Video not found...")
        }
        const comment = new Comment({
            userId: request.user._id,
            videoId: request.body.videoId,
            desc: request.body.desc
        })
        await comment.save()
        response.status(200).json(comment)
    } catch (err) {
        next(err)
    }
}

const updateComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).json("Comment not found...")
        }
        if (comment.userId === req.user._id) {
            const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedComment)
        } else {
            return res.status(403).json("You can update only your comment...")
        }
    }
    catch (err) {
        next(err)
    }
}

const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).json("Comment not found...")
        }
        const video = await Video.findById(comment.videoId)
        if (comment.userId === req.user._id || video.userId === req.user._id) {
            await comment.delete()
            res.status(200).json("Comment has been deleted...")
        } else {
            return res.status(403).json("You can delete only your comment...")
        }
    } catch (err) {
        next(err)
    }
}

const getComment = async (req, res, next) => {
    try {
        const comment = await Comment.find({ videoId: req.params.videoId })
        if (!comment) {
            return res.status(404).json("Comment not found...")
        }
        res.status(200).json(comment)
    } catch (err) {
        next(err)
    }
}

export {
    addComment,
    updateComment,
    deleteComment,
    getComment
}