import { createSlice } from "@reduxjs/toolkit";

const getInitialWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const wishSlice = createSlice({
  name: "wish",
  initialState: getInitialWishlist(),
  reducers: {
    addToWish: (state, action) => {
      const product = action.payload;
      const isDuplicate = state.some((item) => item.id === product.id);

      if (!isDuplicate) {
        state.push(product);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    deleteItem: (state, action) => {
      const productId = action.payload;
      const updatedState = state.filter((item) => item.id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addToWish, deleteItem } = wishSlice.actions;

export const wishReducer = wishSlice.reducer;
