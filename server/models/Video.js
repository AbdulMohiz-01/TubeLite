import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    userId: {
        type: String, // ObjectId
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String, // URL
        required: true,
    },
    videoUrl: {
        type: String, // URL
        required: true,
    },
    views: {
        type: Number, // URL
        default: 0
    },
    tags: {
        type: [String],
        default: [],
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

export default mongoose.model("Video", videoSchema);


// Path: server\models\Video.js