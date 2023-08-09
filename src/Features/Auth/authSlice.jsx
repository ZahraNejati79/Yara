import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  louding: false,
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
          phoneNumber: "09333632654",
          password: "3333333",
          type: "meson",
        };
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.louding = false;
        state.user = [];
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.louding = true;
        state.user = [];
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        state.louding = false;
        // state.user = action.payload;
        state.user = {
          id: 2,
          firstName: "زهرا",
          lastName: "نجاتی",
          phoneNumber: "09333632654",
          password: "3333333",
          type: "meson",
        };
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.louding = false;
        state.user = [];
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
export const getUser = (state) => state.auth.user;
