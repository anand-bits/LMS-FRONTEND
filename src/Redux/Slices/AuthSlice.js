import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === "true",
  role: localStorage.getItem('role') || "",
  data: JSON.parse(localStorage.getItem('data')) || {}
};

export const createAccount = createAsyncThunk(
  "/auth/signup",
  async (data) => {
    try {
      const res = await axiosInstance.post("user/register", data);
      return res.data.message; // Return success message
    } catch (error) {
      throw error.response.data.message; // Throw error message if request fails
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.fulfilled, (state, action) => {
        // No need to use toast here, we handled it within the thunk
      })
      .addCase(createAccount.rejected, (state, action) => {
        toast.error("Account creation failed"); // Show generic error message if account creation fails
      });
  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;
