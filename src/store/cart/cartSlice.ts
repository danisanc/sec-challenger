import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "@types";

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ item: Omit<CartItem, "quantity"> }>
    ) => {
      const itemAlreadyInCart = state.items.find(
        (item) =>
          item.item.id === action.payload.item.item.id &&
          item.pack === action.payload.item.pack
      );

      if (itemAlreadyInCart) {
        const newItems = state.items.map((item) =>
          item.item.id === action.payload.item.item.id &&
          item.pack === action.payload.item.pack
            ? {
                ...itemAlreadyInCart,
                quantity: itemAlreadyInCart.quantity + 1,
              }
            : item
        );

        state.items = newItems;
      } else {
        state.items = [...state.items, { ...action.payload.item, quantity: 1 }];
      }
    },

    removeItemToCart: (state, action: PayloadAction<{ item: CartItem }>) => {
      const newItems = state.items.filter(
        (item) => item.item.id !== action.payload.item.item.id
      );

      state.items = newItems;
    },

    increaseItemQuantity: (
      state,
      action: PayloadAction<{ item: CartItem }>
    ) => {
      const newItems = state.items.map((item) =>
        item.item.id === action.payload.item.item.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      state.items = newItems;
    },

    reduceItemQuantity: (state, action: PayloadAction<{ item: CartItem }>) => {
      if (action.payload.item.quantity === 1) {
        const newItems = state.items.filter(
          (item) => item.item.id !== action.payload.item.item.id
        );

        state.items = newItems;
      } else {
        const newItems = state.items.map((item) =>
          item.item.id === action.payload.item.item.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );

        state.items = newItems;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemToCart,
  increaseItemQuantity,
  reduceItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
