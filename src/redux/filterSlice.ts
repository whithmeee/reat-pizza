import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SortTypeState = {
    name: string;
    sortType: string;
};

interface FilterSliceState {
    category: number;
    sortType: SortTypeState;
}

const initialState: FilterSliceState = {
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
        setCategoryId(state, action: PayloadAction<number>) {
            state.category = action.payload;
        },
        setSortType(state, action: PayloadAction<SortTypeState>) {
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
