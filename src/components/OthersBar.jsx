import { AiOutlineVerified } from "react-icons/ai";
import Avatars from "./Avatars/Avatars";
import MyTasks from "./MyTasks/MyTasks";
import { useSelector } from "react-redux";

const OthersBar = () => {
  const {tasks} = useSelector(state => state.tasksSlice);
  const myTasks = tasks.filter(task => task.author === 'rupom')
  console.log(myTasks)

  return (
    <div className="shadow p-3 min-h-screen">
      <div className="my-5">
        <Avatars />
      </div>
      <hr />
      <h3 className="text-xl font-bold py-3">My Tasks</h3>
     {
      myTasks.map(task => <MyTasks key={task.id} myTasks={task} />)
     }
    </div>
  );
};

export default OthersBar;
