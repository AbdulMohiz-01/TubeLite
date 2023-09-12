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
    }

});

export const { set } = videoSlice.actions;

export default videoSlice.reducer;
