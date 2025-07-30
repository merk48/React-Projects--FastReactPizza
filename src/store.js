import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/context/userSlice";
import cartReducer from "./features/cart/context/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
