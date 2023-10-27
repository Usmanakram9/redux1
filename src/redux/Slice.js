import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    
    name:'counter', 
    initialState: 0,
    reducers: {
        incerement: (state)=>state+1,
        decrement: (state)=>state-1
    } 


})
export const {incerement,decrement} = counterSlice.actions
export default counterSlice.reducer