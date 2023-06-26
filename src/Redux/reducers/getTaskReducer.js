import { createSlice } from "@reduxjs/toolkit";
import api from "../../Api/TasksApi";

const initialState = {
    dataTasks: []
}

export const getTasksReducer = createSlice({
    name: 'getTasks',
    initialState: initialState,
    reducers: {
        getTasksReducerFunction: (state, action) => {
            state = action.payload;
        }
    }
})

export function getTasks() {
    return async function getTasksThunk(dispatch, getState) {
        const res = await api.getAllTasks()
        dispatch(getTasksReducer.actions.getTasksReducerFunction(res))
    }
}

export const getTasksReducerFunction = getTasksReducer.actions
export default getTasksReducer.reducer