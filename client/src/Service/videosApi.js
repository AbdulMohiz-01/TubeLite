import axios from 'axios';
import { BASE_URL } from './config';


const getVideos = async () => {
    try {
        console.log(BASE_URL + " from videosApi.js")
        const response = await axios.get(`${BASE_URL}/api/videos/random`);
        console.log(response + " from videosApi.js");
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};


export {
    getVideos,
}