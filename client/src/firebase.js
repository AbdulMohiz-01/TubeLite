import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import axios from "axios";
import { BASE_URL } from "./Service/config";


const res = await axios.get(`${BASE_URL}/api/keys/find/FIREBASE_KEY`);

const secret_key = res.data.secret_key;

const firebaseConfig = {
    apiKey: secret_key,
    authDomain: "tubelite-184ac.firebaseapp.com",
    projectId: "tubelite-184ac",
    storageBucket: "tubelite-184ac.appspot.com",
    messagingSenderId: "116772027802",
    appId: "1:116772027802:web:89c3ff195af39cc8dbce23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;