import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@store/cart/cartSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;