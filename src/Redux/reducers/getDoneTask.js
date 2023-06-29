import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataDoneTasks: [],
    search: '',
}

export const getDoneTasksReducer = createSlice({
    name: 'getDoneTasks',
    initialState: initialState,
    reducers: {
        searchTasksReducerFunctionDone: (state, actions) => {
            state.search = actions.payload
        }},
    extraReducers: function (builder) {
        builder.addCase(getDoneTasksThunk.pending, (state, action) => {
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

export const searchTasksReducerFunctionDone = getDoneTasksReducer.actions.searchTasksReducerFunctionDone