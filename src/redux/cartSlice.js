import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action) {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        decrementItem(state, action) {
            const decrementItem = state.items.find(
                (item) => item.id === action.payload
            );

            if (decrementItem) {
                decrementItem.count--;
            }

            if (decrementItem.count === 0) {
                decrementItem.count = 1;
            }
        },
        removeItems(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state) => state.cart;

export const { addItems, removeItems, clearItems, decrementItem } =
    cartSlice.actions;
export default cartSlice.reducer;
