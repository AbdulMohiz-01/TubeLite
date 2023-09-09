import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarOpen: false,
    selected: "random",
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialState,

    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        select: (state, action) => {
            state.selected = action.payload;
        }
    }

});

export const { toggleSidebar, select } = sidebarSlice.actions;
export default sidebarSlice.reducer;