import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataDoneTasks: [],
}

export const getDoneTasksReducer = createSlice({
    name: 'getDoneTasks',
    initialState: initialState,
    extraReducers: function (builder) {
        builder.addCase(getDoneTasksThunk.pending, (state, action) => {
            console.log('Pending')
        });
        builder.addCase(getDoneTasksThunk.fulfilled, (state, action) => {
            state.dataDoneTasks = action.payload.filter((item)=> item.status === 'done')
        });
    }
})

export const getDoneTasksThunk = createAsyncThunk('getDoneTasks/getDoneTasksThunk', async function(params) {
    const res = await api.getAllTasks(params)
    return res.data
})