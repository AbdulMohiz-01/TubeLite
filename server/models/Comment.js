import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    userId: {
        type: String, // ObjectId
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    videoId: {
        type: String, // ObjectId
        required: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);


// Path: server\models\Comment.js