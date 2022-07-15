import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name :'form',
    initialState: {
        tasks:[],
    },
    reducers:{
        addTask(state, {payload}){
            state.tasks=payload;
        }
    }
});

export const addTaskActions = formSlice.actions;
export default formSlice.reducer;
export const getAllTasks =(state)=>state.tasks