import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authSlice";
import mesonReducer from "../Features/Meson/mesonSlice";
import dressReducer from "../Features/Dress/dressSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    mesons: mesonReducer,
    dresses: dressReducer,
  },
});
