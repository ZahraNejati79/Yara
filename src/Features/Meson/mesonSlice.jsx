import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";

export const fetchMeson = createAsyncThunk("mesons/fetchMeson", async () => {
  const response = await http.get("/mesons");
  return response.data;
});
export const postMeson = createAsyncThunk(
  "mesons/postMeson",
  async (mesonData) => {
    const response = await http.post("/mesons", mesonData);
    return response.data;
  }
);
export const deleteMeson = createAsyncThunk(
  "mesons/deleteMeson",
  async (mesonId) => {
    await http.delete(`/mesons/${mesonId}`);
    return mesonId;
  }
);
export const mesonSlice = createSlice({
  name: "mesons",
  initialState: {
    meson: [],
    myMeson: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeson.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMeson.fulfilled, (state, action) => {
        state.loading = false;
        state.meson = action.payload;
        state.error = null;
      })
      .addCase(fetchMeson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postMeson.pending, (state) => {
        state.loading = true;
      })
      .addCase(postMeson.fulfilled, (state, action) => {
        state.loading = false;
        state.myMeson = action.payload;
        state.error = null;
      })
      .addCase(postMeson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mesonSlice.reducer;
export const getAllMesons = (state) => state.mesons.meson;
export const getMyMeson = (state) => state.mesons.myMeson;
