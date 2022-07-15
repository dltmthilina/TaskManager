import { createSlice } from "@reduxjs/toolkit"

const initialModalState={
    showModal:false,
}

const modalSlice = createSlice({
    name:'modal',
    initialState: initialModalState,
    reducers:{
        modalOpen:(state)=>{
            state.showModal=true;
        },
        modalClose:(state)=>{
            state.showModal=false;
        }
    }
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;