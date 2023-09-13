import axios from "axios";
import { BASE_URL } from "./config";

const getCommentsByVideoId = async ({ queryKey }) => {
    const videoId = queryKey[1];
    try {
        const response = await axios.get(`${BASE_URL}/api/comments/${videoId}`);
        return response.data;
    } catch (error) {
        response.status(500).json({ message: error.message });
    };
};

const postComment = async (
    { text, videoId }
) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/comments`, {
            text,
            videoId
        }, { withCredentials: true });
        return response.data;
    } catch (error) {
        response.status(500).json({ message: error.message });
    };
};

const updateComment = async (userId) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/comments/${userId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        response.status(500).json({ message: error.message });
    };
};

const deleteComment = async (userId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/comments/${userId}`, { withCredentials: true });
        return response.data;
    } catch (error) {
        response.status(500).json({ message: error.message });
    };
};

export {
    getCommentsByVideoId,
    postComment,
    updateComment,
    deleteComment,
};

