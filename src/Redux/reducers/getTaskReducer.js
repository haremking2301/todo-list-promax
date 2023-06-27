import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataTasks: [],
    isLoading: false,
    search: '',
    pagenumber: 0,
}

export const getTasksReducer = createSlice({
    name: 'getTasks',
    initialState: initialState,
    reducers: {
        searchTasksReducerFunction: (state, actions) => {
            state.search = actions.payload
        },
        pagenumberReducerFunction: (state, actions) => {
            state.pagenumber = actions.payload
        }
    },
    extraReducers: function (builder) {
        builder.addCase(getTasksThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getTasksThunk.fulfilled, (state, action) => {
            state.dataTasks = action.payload
            state.isLoading = false;
        });
    }
})

export const getTasksThunk = createAsyncThunk('getTasks/getTasksThunk', async function(params) {
    const res = await api.getAllTasks(params)
    return res.data
})

export const postTasksThunk = createAsyncThunk('postTasks/postTasksThunk', async function(data) {
    await api.postTask(data)
})


export const searchTasksReducerFunction = getTasksReducer.actions.searchTasksReducerFunction
export const pagenumberReducerFunction = getTasksReducer.actions.pagenumberReducerFunction
export default getTasksReducer.reducer