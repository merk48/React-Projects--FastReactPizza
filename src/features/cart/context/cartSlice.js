import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = initialState.cart;
    },
    increaseItemQuantity(state, action) {
      state.cart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quanity: item.quanity + 1 }
          : item,
      );
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quanity++;
      item.totalPrice = item.quanity * item.unitPrice;
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// use reselect library for better selectors

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
