import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/Auth/authSlice";
import mesonReducer from "../Features/Meson/mesonSlice";
import dressReducer from "../Features/Dress/dressSlice";
import commentReducer from "../Features/Comment/commentSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    mesons: mesonReducer,
    dresses: dressReducer,
    comment: commentReducer,
  },
});
