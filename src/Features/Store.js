import { configureStore } from "@reduxjs/toolkit";
import mesonReducer from "../Features/Meson/mesonSlice";
import dressReducer from "../Features/Dress/dressSlice";
export const store = configureStore({
  reducer: {
    mesons: mesonReducer,
    dresses: dressReducer,
  },
});
