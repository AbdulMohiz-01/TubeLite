import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    img: null
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,

    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.img = action.payload.img;
        },
        logout: (state) => {
            state.name = null;
            state.email = null;
            state.img = null;
        }
    }

});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
