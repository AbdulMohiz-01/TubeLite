// import axios from 'axios';
import { BASE_URL } from './config';
import axios from 'axios';

const findUser = async ({ queryKey }) => {
    const id = queryKey[1];
    const response = await axios.get(`${BASE_URL}/api/users/find/${id}`);

    if (response.status !== 200) {
        throw new Error('findUser fetch not ok');
    }
    return response.data;
};

const findBatchUsers = async ({ queryKey }) => {
    const ids = queryKey[2];
    if (!ids || ids.length === 0) {
        return [];
    }
    const response = await axios.get(`${BASE_URL}/api/users/batch/find/${ids}`);

    if (response.status !== 200) {
        throw new Error('findBatchUsers fetch not ok');
    }
    return response.data;
}

const actions = async (action, videoId) => {
    const response = await axios.put(`${BASE_URL}/api/users/${action}/${videoId}`, {}, { withCredentials: true });
    // if (response.status != 200) {
    //     throw new Error(`${action} complete not ok`);
    // }
    console.log(response)
    return response.data;
}

export {
    findUser,
    findBatchUsers,
    actions
}