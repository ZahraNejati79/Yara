import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const LOCAL_STORAGE_AUTH_KEY = "authState";

export const signupUser = createAsyncThunk("user/signup", async (userData) => {
  const response = await signupUser(userData);
  return response.data;
});

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  const response = await loginUser(userData);
  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, response.data);
  return response.data;
});

export const editUser = createAsyncThunk("user/edit", async (userData) => {
  const response = await editUser(userData);
  localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, response.data);
  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.user = action.payload;
        state.user = {
          id: 2,
          firstName: "زهرا",
          lastName: "نجاتی",
          phoneNumber: "09333632654",
          password: "3333333",
          type: "meson",
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log("accccc", action.payload);
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
export const getUser = (state) => state.auth.user;
