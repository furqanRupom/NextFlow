import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    tasks:[],
    usersTasks:[]
}



const tasksSlice = createSlice({
    initialState:initialState,
    name:'tasks',
    reducers:{
        addTask:(state,{payload})=>{

            if(state.tasks.length === 0){
                state.tasks.push({id:1,status:'pending',...payload});
            }else{
                const lastElement = state.tasks.at(-1);
                state.tasks.push({id:lastElement.id + 1,status:'pending', ...payload})
            }
        },
        removeTask: (state,{payload}) =>{
            state.tasks = state.tasks.filter(task => task.id !== payload)
        },
        updateStatus : (state,{payload}) =>{
            const target = state.tasks.find(item => item.id === payload.id);
            target.status = payload.status;
        },
        usersMatchedTasks: (state,{payload}) =>{
                 state.usersTasks = state.tasks.filter( task=> task.author === payload);
        }
    }
})
export const {addTask,removeTask,updateStatus,usersMatchedTasks} = tasksSlice.actions
export default tasksSlice.reducer