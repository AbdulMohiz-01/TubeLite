import { configureStore } from "@reduxjs/toolkit";
import sideBar from "./slices/sidebarSlice.js";

const store = configureStore({
    reducer: {
        sideBar
    }
})

export default store;