import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";

const initialState = {
  dresses: [],
  selectedDress: {},
};

export const fetchAsyncDresses = createAsyncThunk(
  "/dresses/fetchAsyncDresses",
  async () => {
    const response = await http.get("/dresses");
    return response.data;
  }
);

export const fetchAsyncSelectedDress = createAsyncThunk(
  "/dresses/fetchAsyncSelectedDress",
  async (dressId) => {
    const response = await http.get(`/dresses/${dressId}`);
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
    [fetchAsyncSelectedDress.pending]: () => {
      console.log("selectedDress pending");
    },
    [fetchAsyncSelectedDress.fulfilled]: (state, { payload }) => {
      return { ...state, selectedDress: payload };
    },
    [fetchAsyncSelectedDress.rejected]: () => {
      console.log("selectedDress rejected");
    },
  },
});
export default dressSlice.reducer;
export const getAllDresses = (state) => state.dresses.dresses;
export const getSelectedDress = (state) => state.dresses.selectedDress;
