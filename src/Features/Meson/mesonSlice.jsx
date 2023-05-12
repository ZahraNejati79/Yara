import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meson: [],
};
export const mesonSlice = createSlice({
  name: "meson",
  initialState,
  reducers: {
    add: (state) => {
      console.log(state);
    },
  },
});
export const { add } = mesonSlice.actions;
export default mesonSlice.reducer;
