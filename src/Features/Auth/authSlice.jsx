import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../../Services/loginService";
import { signupSerevice } from "../../Services/signupService";
import { toast } from "react-toastify";
const initialState = {
  user: {},
  loading: false,
  error: null,
};

const LOCAL_STORAGE_AUTH_KEY = "authState";

export const signupUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    console.log("userData", userData);
    const response = await signupSerevice(userData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("user/login", async (userData) => {
  console.log("userData", userData);
  const response = await loginService(userData);
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
        toast.success("ثبت نام شما با موفقیت انجام شد ");
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error("ثبت نام ناموفق ");
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        toast.success("ورود شما با موفقیت انجام شد ");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error("ورود ناموفق ");
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        toast.success("پروفایل شما با موفقیت آپدیت شد ");
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(" آپدیت ناموفق ");
      });
  },
});
export default authSlice.reducer;
export const getUser = (state) => state.auth.user;
