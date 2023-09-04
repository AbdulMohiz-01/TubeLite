import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// import the routes
import authRoutes from './routes/auths.js';
import videoRoutes from './routes/videos.js';
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';



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

// initialize express
const app = express();

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
// this middleware will allow us to send cookies to client side
app.use(cookieParser());

// this middleware will allow us to send custom error messages
app.use((err, req, res, next) => {
    const [status, message] = [err.status || 500, err.message || 'Internal Server Error'];
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})


// > routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);


// start the server
app.listen(3000, () => {
    connect();
    console.log("listening on: http://localhost:3000")
}
);