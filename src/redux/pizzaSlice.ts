import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    "pizza/fetchPizzaStatus",
    async (params) => {
        const { page, sort, search, categoryActive } = params;
        const { data } = await axios.get(
            `https://7d7cc53e3b90fa42.mokky.dev/allItems?page=${page}&limit=8&sortBy=${
                sort.sortType
            }&title=*${search}${
                categoryActive > 0 ? `&category=${categoryActive}` : ""
            }`
        );

        return data.items;
    }
);

type Pizza = {
    id: number;
    imageUrl: string;
    price: number;
    title: string;
    sizes: number[];
    types: string[];
    category: number;
    description: string;
};

interface PizzaSliceState {
    items: Pizza[];
    status: "loading" | "error" | "success";
}

const initialState: PizzaSliceState = {
    items: [],
    status: "loading",
};

const pizzaSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPizza.pending, (state) => {
                state.status = "loading";
                state.items = [];
            })
            .addCase(fetchPizza.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })

            .addCase(fetchPizza.rejected, (state) => {
                state.status = "error";
                state.items = [];
            });
    },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
