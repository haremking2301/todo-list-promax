import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataNewTasks: [],
    search: '',
}

export const getNewTasksReducer = createSlice({
    name: 'getNewTasks',
    initialState: initialState,
    reducers: {
        searchTasksReducerFunctionNew: (state, actions) => {
            state.search = actions.payload
        }},
    extraReducers: function (builder) {
        builder.addCase(getNewTasksThunk.pending, (state, action) => {
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

export const searchTasksReducerFunctionNew = getNewTasksReducer.actions.searchTasksReducerFunctionNew