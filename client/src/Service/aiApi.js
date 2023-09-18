import { BASE_URL } from "./config";
import axios from "axios";


const generateDescription = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/ai/generate/desc`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export {
    generateDescription,
}