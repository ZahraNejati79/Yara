import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";

const initialState = {
  dresses: [],
};

export const fetchAsyncDresses = createAsyncThunk(
  "/dresses/fetchAsyncDresses",
  async () => {
    const response = await http.get("/dresses");
    return response.data;
  }
);

export const dressSlice = createSlice({
  name: "dresses",
  initialState,
  extraReducers: {
    [fetchAsyncDresses.pending]: () => {
      console.log("dresses pending");
    },
    [fetchAsyncDresses.fulfilled]: (state, { payload }) => {
      return { ...state, dresses: payload };
    },
    [fetchAsyncDresses.rejected]: () => {
      console.log("dresses rejected");
    },
  },
});
export default dressSlice.reducer;
export const getAllDresses = (state) => state.dresses.dresses;
