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
        default: "https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_2560%2Cc_limit/100-best-games-hp-b.jpg"
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