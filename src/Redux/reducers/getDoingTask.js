import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataDoingTasks: [],
    search: '',
}

export const getDoingTasksReducer = createSlice({
    name: 'getDoingTasks',
    initialState: initialState,
    reducers: {
        searchTasksReducerFunctionDoing: (state, actions) => {
            state.search = actions.payload
        }},
    extraReducers: function (builder) {
        builder.addCase(getDoingTasksThunk.pending, (state, action) => {
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

export const searchTasksReducerFunctionDoing = getDoingTasksReducer.actions.searchTasksReducerFunctionDoing