import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Video from "../models/video.js";
import mongoose from 'mongoose';


const updateUser = async (request, response, next) => {
    if (request.user._id === request.params.id) {
        if (request.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                request.body.password = await bcrypt.hash(request.body.password, salt);
            } catch (error) {
                return next(error);
            }
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(request.params.id, {
                $set: request.body,
            }, { new: true });
            response.status(200).json(updatedUser);
        } catch (error) {
            return next(error);
        }
    } else {
        return response.status(403).json("You can update only your account!");
    }

}

const deleteUser = async (request, response, next) => {
    if (request.user._id === request.params.id) {
        try {
            await User.findByIdAndDelete(request.params.id);
            response.status(200).json("User has been deleted...");
        } catch (error) {
            return next(error);
        }
    } else {
        return response.status(403).json("You can delete only your account!");
    }
}

const getUser = async (request, response, next) => {
    try {
        const user = await User.findById(request.params.id);
        const { password, updatedAt, ...other } = user._doc;
        response.status(200).json(other);
    } catch (err) {
        next(err)
    }

}

// get batch users
const getBatchUsers = async (request, response, next) => {
    try {

        const userIds = request.params.users.split(','); // Split the string into an array of individual IDs
        const objectIds = userIds.map(userId => new mongoose.Types.ObjectId(userId)); // Convert each ID to ObjectId

        const users = await User.find({ _id: { $in: objectIds } });
        // TODO: extract the password and updatedAt from the users

        response.status(200).json(users);
    } catch (err) {
        next(err);
    }
}
const subscribeUser = async (request, response, next) => {
    // request.user._id is the id of the user who is subscribing
    // request.params.id is the id of the user to whom we are subscribing

    if (request.user._id === request.params.id) {
        return response.status(403).json("You cannot subscribe to yourself...")
    }


    try {
        await User.findByIdAndUpdate(request.user._id, {
            $push: { subscribedUsers: request.params.id }
        }, { new: true })

        await User.findByIdAndUpdate(request.params.id, {
            $inc: { subscribers: 1 }
        }, { new: true })

        response.status(200).json("User has been subscribed...")

    } catch (err) {
        next(err)
    }

}

const unsubscribeUser = async (request, response, next) => {
    // request.user._id is the id of the user who is unsubscribing
    // request.params.id is the id of the user to whom we are unsubscribing

    try {
        await User.findByIdAndUpdate(request.user._id, {
            $pull: { subscribedUsers: request.params.id }
        }, { new: true })

        await User.findByIdAndUpdate(request.params.id, {
            $inc: { subscribers: -1 }
        }, { new: true })

        response.status(200).json("User has been unsubscribed...")

    } catch (err) {
        next(err)
    }

}

const likeVideo = async (request, response, next) => {
    const userId = request.user._id;
    const videoId = request.params.videoId;



    if (!userId || !videoId) {
        return response.status(403).json("You cannot like this video...")
    }

    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { likes: userId },
            $pull: { dislikes: userId },
        }, { new: true })

        response.status(200).json("The video has been liked...")
    }
    catch (err) {
        next(err)
    }




}

const dislikeVideo = async (request, response, next) => {
    const id = request.user._id;
    const videoId = request.params.videoId;

    if (!id || !videoId) {
        return response.status(403).json("You cannot dislike this video...")
    }

    try {
        await Video.findByIdAndUpdate(videoId, {
            $addToSet: { dislikes: id },
            $pull: { likes: id }
        })
        response.status(200).json("The video has been disliked.")
    } catch (err) {
        next(err);
    }

}



export {
    updateUser,
    deleteUser,
    getUser,
    getBatchUsers,
    subscribeUser,
    unsubscribeUser,
    likeVideo,
    dislikeVideo,
}