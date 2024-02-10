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
      // Notify success
      toast.success("Account created successfully");
      return res.data.message; // Return success message
    } catch (error) {
      // Notify error
      toast.error(error.response?.data?.message || "Failed to create account");
      throw error.response?.data?.message; // Throw error message if request fails
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // No need for extraReducers, handle everything within createAccount
});

export const { } = authSlice.actions;

export default authSlice.reducer;
