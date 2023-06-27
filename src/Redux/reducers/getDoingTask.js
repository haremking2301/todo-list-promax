import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataDoingTasks: [],
}

export const getDoingTasksReducer = createSlice({
    name: 'getDoingTasks',
    initialState: initialState,
    extraReducers: function (builder) {
        builder.addCase(getDoingTasksThunk.pending, (state, action) => {
            console.log('Pending')
        });
        builder.addCase(getDoingTasksThunk.fulfilled, (state, action) => {
            state.dataDoingTasks = action.payload.filter((item)=> item.status === 'doing')
        });
    }
})

export const getDoingTasksThunk = createAsyncThunk('getDoingTasks/getDoingTasksThunk', async function(params) {
    const res = await api.getAllTasks(params)
    return res.data
})