import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item } from "@types";

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ item: Item }>) => {
      state.items = [...state.items, action.payload.item];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
