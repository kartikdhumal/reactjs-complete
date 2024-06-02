import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            const index = Object.keys(state.items).length;
            state.items[index] = action.payload;
        },
        removeItem: (state, action) => {
            delete state.items[action.payload];
        },
        updateItem: (state, action) => {
            const { key, value } = action.payload;
            if (state.items[key] !== undefined) {
                state.items[key] = value;
            }
        },
        clearItem: (state) => {
            state.items = {};
        }
    }
});

export const { addItem, removeItem, updateItem, clearItem } = cartSLice.actions;
export default cartSLice.reducer;