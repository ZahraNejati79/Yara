import { configureStore } from "@reduxjs/toolkit";
import mesonReducer from "../Features/Meson/mesonSlice";
export const store = configureStore({
  reducer: {
    mesons: mesonReducer,
  },
});
