import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCart() || [],
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const findProduct = state.find((item) => item.id === product.id);

      if (findProduct) {
        findProduct.quantity = Number(findProduct.quantity) + 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    onChangeQuantity: (state, action) => {
      const { productId, qty } = action.payload;
      const findProduct = state.find((item) => item.id === productId);
      findProduct.quantity = qty;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteCartItem: (state, action) => {
      const productId = action.payload;
      const updatedState = state.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    resetCartItem: (state) => {
      // const productId = action.payload;
      // console.log("basel")
      // console.log(state)
      state.splice(0, state.length);
      localStorage.removeItem("cart")
    },
  },
});

export const { addToCart, deleteCartItem, onChangeQuantity , resetCartItem} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
