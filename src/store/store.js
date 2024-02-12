import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./home/home.store";
import { cartReducer } from "./cart/cart.store";
import { wishReducer } from "./wish/wish.store";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
    wish: wishReducer,
  },
});
