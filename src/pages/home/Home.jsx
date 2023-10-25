import TasksCard from "../../components/Tasks/TasksCard";
import { useSelector } from "react-redux";

const Home = () => {

  const {tasks} = useSelector((task)=> task.tasksSlice)
  // console.log(tasks);

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const runningTasks = tasks.filter(task => task.status === 'running');
  const completedTasks = tasks.filter(task => task.status === 'done');


  return (
    <section className="grid grid-cols-3 gap-5  mt-12">
      <div>
        <div className="flex justify-between items-center bg-gray-200 py-3 px-2 rounded-2xl">
          <h3>Up Next</h3>
          <h5 className="bg-gray-500 text-white px-3 py-1 text-xl rounded-2xl">
            {pendingTasks?.length}
          </h5>
        </div>

        {/* up next work */}
        {pendingTasks?.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center bg-gray-200 py-3 px-2 rounded-2xl">
          <h3>In Progress</h3>
          <h5 className="bg-gray-500 text-white px-3 py-1 text-xl rounded-2xl">
            {runningTasks?.length}
          </h5>
        </div>

        {/* in progress */}
        {runningTasks?.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center bg-gray-200 py-3 px-2 rounded-2xl">
          <h3>Completed</h3>
          <h5 className="bg-gray-500 text-white px-3 py-1 text-xl rounded-2xl">
            {completedTasks?.length}
          </h5>
        </div>

        {/* completed */}
        {completedTasks?.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Home;
