import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    courseData:[]
}

export const getAllCourses= createAsyncThunk("/course/get",async()=>
{
    
})

const courseSlice= createSlice(
    {
        name:"courses",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{

        }
    }
);

export default courseSlice.reducer;