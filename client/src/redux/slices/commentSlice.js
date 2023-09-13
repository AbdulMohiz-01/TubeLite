import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentVideoComments: null,
};

const commentSlice = createSlice({
    name: "comment",
    initialState: initialState,

    reducers: {
        getComments: (state, action) => {
            state.currentVideoComments = action.payload;
        }



    }

});

export const { getComments } = commentSlice.actions;

export default commentSlice.reducer;
