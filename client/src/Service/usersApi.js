import axios from 'axios';
import { BASE_URL } from './config';

const findUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/find/${id}`);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export {
    findUser,
}