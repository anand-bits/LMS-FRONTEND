import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const response = await axiosInstance.post("user/register", data);
        toast.promise(response, {
            loading: 'Wait! creating your account',
            success: (data) => data?.data?.message,
            error: 'Failed to create your account'
        });
        return response.data;
    } catch(error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

export const updateProfile = createAsyncThunk("/auth/updateProfile", async (data) => {
    try {
        const response = await axiosInstance.put(`user/update/${data[0]}`, data[1]);
        toast.promise(response, {
            loading: 'Wait! updating your account',
            success: (data) => data?.data?.message,
            error: 'Failed to update your account'
        });
        return response.data;
    } catch(error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

export const getUserData = createAsyncThunk("/auth/getData", async () => {
    try {
        const response = await axiosInstance.get("/user/me");
        return response.data;
    } catch(error) {
        toast.error(error?.message);
        throw error;
    }
});

export const login = createAsyncThunk("/auth/signin", async (data) => {
    try {
        const response = await axiosInstance.post("user/login", data);
        toast.promise(response, {
            loading: 'Wait! authenticating your account',
            success: (data) => data?.data?.message,
            error: 'Failed to authenticate your account'
        });
        return response.data;
    } catch(error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
    try {
        const response = await axiosInstance.get("user/logout");
        toast.promise(response, {
            loading: 'Wait! logging out your account',
            success: (data) => data?.data?.message,
            error: 'Failed to logout your account'
        });
        return response.data;
    } catch(error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        throw error;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            const { data } = action.payload;
            localStorage.setItem("data", JSON.stringify(data));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", data.user?.role || ''); // Default to empty string if role is not available
            return {
                ...state,
                isLoggedIn: true,
                role: data.user?.role || '', // Default to empty string if role is not available
                data: data.user || {} // Assuming data.user contains user information
            };
        })
        
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
            state.role = "";
            state.data = {};
        })
        .addCase(getUserData.fulfilled, (state, action) => {
            if(action.payload.user) {
                localStorage.setItem("data", JSON.stringify(action.payload.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action.payload.user.role);
                state.isLoggedIn = true;
                state.role = action.payload.user.role;
                state.data = action.payload.user;
            }
        })
        .addCase(createAccount.fulfilled, (state, action) => {
            if(action.payload.user) {
                localStorage.setItem("data", JSON.stringify(action.payload.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action.payload.user.role);
                state.isLoggedIn = true;
                state.role = action.payload.user.role;
                state.data = action.payload.user;
            }
        })
        .addCase(updateProfile.fulfilled, (state, action) => {
            if(action.payload.user) {
                localStorage.setItem("data", JSON.stringify(action.payload.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action.payload.user.role);
                state.isLoggedIn = true;
                state.role = action.payload.user.role;
                state.data = action.payload.user;
            }
        });
    }
});

export default authSlice.reducer;
