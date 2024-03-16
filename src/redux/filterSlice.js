import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sortType: {
        name: "",
        sortType: "",
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
        setClearSort(state) {
            state.sortType = {
                name: "",
                sortType: "",
            };
        },
    },
});

export const { setCategoryId, setSortType, setClearSort } = filterSlice.actions;
export default filterSlice.reducer;
