import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./slices/sidebarSlice.js";
import user from "./slices/userSlice.js";

const store = configureStore({
    reducer: {
        sideBar,
        user
    },
})

export default store;