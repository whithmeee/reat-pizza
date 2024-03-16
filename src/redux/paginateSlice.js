import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
};

export const paginateSlice = createSlice({
    name: "paginate",
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export const { setPage } = paginateSlice.actions;
export default paginateSlice.reducer;
