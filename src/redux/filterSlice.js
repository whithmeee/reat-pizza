import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sortType: {
        name: "популярности",
        sortType: "rating",
    },
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.category = action.payload;
        },
        setSortType(state, action) {
            state.sortType = action.payload;
        },
    },
});

export const { setCategoryId, setSortType } = filterSlice.actions;
export default filterSlice.reducer;
