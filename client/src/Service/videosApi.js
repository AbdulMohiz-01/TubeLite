import axios from 'axios';
import { BASE_URL } from './config';



const getVideos = async ({ queryKey }) => {
    // the key will be random, trending, subscribed, search, tag etc
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

const getVideoById = async ({ queryKey }) => {
    const id = queryKey[1];

    const videoResponse = await axios.get(`${BASE_URL}/api/videos/find/${id}`);

    const userResponse = await axios.get(`${BASE_URL}/api/users/find/${videoResponse.data.userId}`);

    const commentResponse = await axios.get(`${BASE_URL}/api/comments/${id}`);

    if (videoResponse.status !== 200 || userResponse.status !== 200 || commentResponse.status !== 200) {
        throw new Error('getVideoById fetch not ok');
    }
    // eslint-disable-next-line no-unused-vars
    const { userId, ...rest } = videoResponse.data;
    const data = { ...rest, user: userResponse.data };
    return data;
}





export {
    getVideos,
    getVideoById,
}