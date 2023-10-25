import { AiOutlineVerified } from "react-icons/ai";
import Avatars from "./Avatars/Avatars";
import MyTasks from "./MyTasks/MyTasks";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { usersMatchedTasks } from "../redux/features/tasks/tasksSlice";

const OthersBar = () => {
  const {name:userName} = useSelector(state=>state.usersSlice);
  console.log(userName)
  const {usersTasks} = useSelector(state => state.tasksSlice)
  console.log(usersTasks)
  const dispatch = useDispatch()
  useEffect(()=>{
       dispatch(usersMatchedTasks(userName));
  },[userName,dispatch])




  return (
    <div className="shadow p-3 min-h-screen">
      <div className="my-5">
        <Avatars key={nanoid}/>
      </div>
      <hr />
      <h3 className="text-xl font-bold py-3">My Tasks</h3>
     {

      usersTasks?.map(task => <MyTasks key={task?.id} myTasks={task} />)

     }
    </div>
  );
};

export default OthersBar;
