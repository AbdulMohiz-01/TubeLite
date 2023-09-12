import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentVideo: null,
};

const videoSlice = createSlice({
    name: "video",
    initialState: initialState,

    reducers: {
        set: (state, action) => {
            state.currentVideo = action.payload;
        },
        like: (state, action) => {
            if (!state.currentVideo.likes.includes(action.payload)) {
                state.currentVideo.likes.push(action.payload);
                state.currentVideo.dislikes.splice(state.currentVideo.dislikes.indexOf(action.payload), 1);
            }
        },
        dislike: (state, action) => {
            if (!state.currentVideo.dislikes.includes(action.payload)) {
                state.currentVideo.dislikes.push(action.payload);
                state.currentVideo.likes.splice(state.currentVideo.likes.indexOf(action.payload), 1);
            }
        },
        incrementSubscribers: (state) => {
            state.currentVideo.user.subscribers += 1;
        },
        decrementSubscribers: (state) => {
            state.currentVideo.user.subscribers -= 1;
        }


    }

});

export const { set, like, dislike, incrementSubscribers, decrementSubscribers } = videoSlice.actions;

export default videoSlice.reducer;
