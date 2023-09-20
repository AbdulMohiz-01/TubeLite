import { BASE_URL } from "./config";
import axios from "axios";


const generateDescription = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/ai/generate/desc`, data, {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export {
    generateDescription,
}