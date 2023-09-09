import axios from 'axios';
import { BASE_URL } from './config';



const getVideos = async ({ queryKey }) => {
    let key = queryKey[1];

    const response = await axios.get(`${BASE_URL}/api/videos/${key}`);
    if (response.status !== 200) {
        throw new Error('getVideos fetch not ok');
    }

    // fetch the users data from the api
    const videoIds = response.data.map(video => video.userId);
    const usersResponse = await axios.get(`${BASE_URL}/api/users/batch/find/${videoIds.join(',')}`);
    if (usersResponse.status !== 200) {
        throw new Error('getVideos fetch not ok');
    }

    const videosWithUsers = response.data.map(video => {
        const user = usersResponse.data.find(user => user._id === video.userId);

        return { ...video, user };
    });
    return videosWithUsers;

};



export {
    getVideos,
}