import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";

const initialState = {
  mesons: [],
};
export const fetchAsyncMesons = createAsyncThunk(
  "mesons/fetchAsyncMesons",
  async () => {
    const response = await http.get("/mesons");
    return response.data;
  }
);

export const mesonSlice = createSlice({
  name: "mesons",
  initialState,
  reducers: {
    add: (state) => {
      console.log(state);
    },
  },
  extraReducers: {
    [fetchAsyncMesons.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMesons.fulfilled]: (state, { payload }) => {
      return { ...state, mesons: payload };
    },
    [fetchAsyncMesons.rejected]: (err) => {
      console.log(err);
    },
  },
});
export const { add } = mesonSlice.actions;
export default mesonSlice.reducer;
export const getAllMesons = (state) => state.mesons.mesons;
