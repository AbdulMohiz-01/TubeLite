import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,

    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        subscription: (state, action) => {
            if (state.currentUser.subscribedUsers.includes(action.payload)) {
                state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.indexOf(action.payload), 1);
            }
            else {
                state.currentUser.subscribedUsers.push(action.payload);
            }
        }

    }

});

export const { login, logout, subscription } = userSlice.actions;

export default userSlice.reducer;
