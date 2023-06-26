import { configureStore } from "@reduxjs/toolkit";
import { getTasksReducer } from "../reducers/getTaskReducer";


const store = configureStore({
    reducer: {
        getTasks: getTasksReducer.reducer,
    }
})

export default store;