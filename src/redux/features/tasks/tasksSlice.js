import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    tasks:[]
}




const tasksSlice = createSlice({
    initialState:initialState,
    name:'tasks',
    reducers:{}
})

export default tasksSlice.reducer