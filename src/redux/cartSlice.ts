import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    sizes: number;
    types: string;
    count: number;
};

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartSliceState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action: PayloadAction<CartItem>) {
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
        decrementItem(state, action: PayloadAction<number>) {
            const decrementItem = state.items.find(
                (item) => item.id === action.payload
            );

            if (decrementItem) {
                decrementItem.count--;
            }

            if (decrementItem?.count === 0) {
                decrementItem.count = 1;
            }
        },
        removeItems(state, action: PayloadAction<number>) {
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

export const { addItems, removeItems, clearItems, decrementItem } =
    cartSlice.actions;
export default cartSlice.reducer;
