import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


// Connect to MongoDB
const connect = () => {
    mongoose.connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
    ).then(() => {
        console.log('MongoDB connected');
    }
    ).catch((err) => { throw err });
}

const app = express();

app.listen(3000, () => {
    connect();
    console.log('Server listening on port 3000');
}
);