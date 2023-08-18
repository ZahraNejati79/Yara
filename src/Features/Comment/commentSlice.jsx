import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../Services/Https";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};
export const postComment = createAsyncThunk(
  "comment/postComment",
  async (commentData) => {
    console.log(commentData);
    const response = await http.post("/comments", commentData);
    return response.data;
  }
);
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await http.get("/comments");
    return response.data;
  }
);
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(postComment.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default commentSlice.reducer;
export const getAllComments = (state) => state.comment.comments;
