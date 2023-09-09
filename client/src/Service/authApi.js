import axios from "axios"
import { BASE_URL } from "./config"

// Function for signing in
const signIn = async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/auth/signin`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    });

    if (response.status !== 200) {
        throw new Error("Error in signing in");
    }
    return response.data;
}

// Function for registering
const register = async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/auth/signup`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    });
    // status 201 means: successfully created
    if (response.status !== 201) {
        throw new Error("Error in registering");
    }

    return response.data;
};

export {
    register,
    signIn
}