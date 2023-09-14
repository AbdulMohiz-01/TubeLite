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
        },
        like: (state, action) => {
            state.currentVideoComments = state.currentVideoComments.map((comment) => {
                if (comment._id === action.payload) {
                    comment.likes++;
                }
                return comment;
            });
        },
        dislike: (state, action) => {
            state.currentVideoComments = state.currentVideoComments.map((comment) => {
                if (comment._id === action.payload) {
                    comment.dislikes++;
                }
                return comment;
            });
        },
        updateComment: (state, action) => {
            state.currentVideoComments = state.currentVideoComments.map((comment) => {
                if (comment._id === action.payload._id) {
                    return action.payload;
                }
                return comment;
            })
        },
        deleteComment: (state, action) => {
            state.currentVideoComments = state.currentVideoComments.map((comment) => {
                if (comment._id === action.payload._id) {
                    return action.payload;
                }
                return comment;
            })
        }



    }

});

export const { getComments } = commentSlice.actions;

export default commentSlice.reducer;
