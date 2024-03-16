import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import paginateSlice from "./paginateSlice";
import cartSlice from "./cartSlice";
import pizzaSlice from "./pizzaSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        page: paginateSlice,
        cart: cartSlice,
        pizza: pizzaSlice,
    },
});
