import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?size=626&ext=jpg&ga=GA1.2.2093979266.1691594910&semt=sph",
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type: [String],
        default: [],
    }
}, { timestamps: true });

export default mongoose.model("User", userSchema);