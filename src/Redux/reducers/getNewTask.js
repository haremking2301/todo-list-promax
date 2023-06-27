import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataNewTasks: [],
}

export const getNewTasksReducer = createSlice({
    name: 'getNewTasks',
    initialState: initialState,
    extraReducers: function (builder) {
        builder.addCase(getNewTasksThunk.pending, (state, action) => {
            console.log('Pending')
        });
        builder.addCase(getNewTasksThunk.fulfilled, (state, action) => {
            state.dataNewTasks = action.payload.filter((item)=> item.status === 'new')
        });
    }
})

export const getNewTasksThunk = createAsyncThunk('getNewTasks/getNewTasksThunk', async function(params) {
    const res = await api.getAllTasks(params)
    return res.data
})