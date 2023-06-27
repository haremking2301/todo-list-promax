import { configureStore } from "@reduxjs/toolkit";
import { getTasksReducer } from "../reducers/getTaskReducer";
import { getNewTasksReducer } from "../reducers/getNewTask";
import { getDoingTasksReducer } from "../reducers/getDoingTask";
import { getDoneTasksReducer } from "../reducers/getDoneTask";


const store = configureStore({
    reducer: {
        getTasks: getTasksReducer.reducer,
        getNewTasks: getNewTasksReducer.reducer,
        getDoingTasks: getDoingTasksReducer.reducer,
        getDoneTasks: getDoneTasksReducer.reducer
    }
})

export default store;