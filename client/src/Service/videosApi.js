import axios from 'axios';
import { BASE_URL } from './config';


const getVideos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/videos/random`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const getTrendingVideos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/videos/trending`);
        return response;
    } catch (error) {
        return error;
    }
}



export {
    getVideos,
    getTrendingVideos
}