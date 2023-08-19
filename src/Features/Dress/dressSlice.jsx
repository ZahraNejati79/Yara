import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";
import { toast } from "react-toastify";

const initialState = {
  loading: null,
  dress: {},
  dresses: [],
  selectedDress: {},
  error: false,
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

export const postDress = createAsyncThunk(
  "/dresses/createDress",
  async (dressData) => {
    const response = await http.post("/dresses", dressData);
    return response.data;
  }
);
export const deleteDress = createAsyncThunk(
  "/dresses/deleteDress",
  async (dressId) => {
    const response = await http.delete(`dresses/${dressId}`);
    return response.data;
  }
);
export const dressSlice = createSlice({
  name: "dresses",
  initialState,
  extraReducers: {
    [fetchAsyncDresses.pending]: (state) => {
      state.loading = true;
    },
    [fetchAsyncDresses.fulfilled]: (state, action) => {
      state.loading = false;
      state.dresses = action.payload;
    },
    [fetchAsyncDresses.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [fetchAsyncSelectedDress.pending]: (state) => {
      state.loading = true;
    },
    [fetchAsyncSelectedDress.fulfilled]: (state, action) => {
      state.selectedDress = action.payload;
      state.loading = false;
    },
    [fetchAsyncSelectedDress.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [postDress.pending]: (state) => {
      state.loading = true;
    },
    [postDress.fulfilled]: (state, action) => {
      state.dress = action.payload;
      state.loading = false;
      console.log(action.payload);
      toast.success("لباس با موفقیت ثبت شد");
    },
    [postDress.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [deleteDress.pending]: (state) => {
      state.loading = true;
    },
    [deleteDress.fulfilled]: (state) => {
      state.loading = false;
      toast.success("لباس با موفقیت حذف شد");
    },
    [deleteDress.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      toast.error("خطا در حذف لباس");
    },
  },
});
export default dressSlice.reducer;
export const getAllDresses = (state) => state.dresses.dresses;
export const getSelectedDress = (state) => state.dresses.selectedDress;
export const getCreatedDress = (state) => state.dresses.dress;
