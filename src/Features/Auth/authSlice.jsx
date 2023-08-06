import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 2,
    firstName: "زهرا",
    lastName: "نجاتی",
  },
  louding: false,
  error: null,
};

export const signupUser = createAsyncThunk("user/signup", async (userData) => {
  const response = await signupUser(userData);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.louding = true;
        state.user = [];
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        console.log(action);
        state.louding = false;
        // state.user = action.payload;
        state.user = {
          id: 2,
          firstName: "زهرا",
          lastName: "نجاتی",
        };
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.louding = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
export const getUser = (state) => state.auth.user;
