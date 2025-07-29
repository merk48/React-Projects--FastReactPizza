import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/context/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
