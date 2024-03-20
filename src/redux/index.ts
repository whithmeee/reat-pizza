import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import paginateSlice from "./paginateSlice";
import cartSlice from "./cartSlice";
import pizzaSlice from "./pizzaSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        page: paginateSlice,
        cart: cartSlice,
        pizza: pizzaSlice,
    },
});

export type AppDisptah = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
