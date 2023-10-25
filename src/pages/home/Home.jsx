import TasksCard from "../../components/Tasks/TasksCard";

const Home = () => {
  return (
  <section className="grid grid-cols-3 gap-5  mt-12">
      <div>
        <div className="flex justify-between items-center bg-slate-300 py-3 px-2 rounded-2xl">
          <h3>Up Next</h3>
          <h5 className="bg-slate-700 text-white px-3 py-1 text-xl rounded-2xl">0</h5>
        </div>

        {/* up next work */}
        <TasksCard />

      </div>
      <div>
        <div className="flex justify-between items-center bg-slate-300 py-3 px-2 rounded-2xl">
          <h3>In Progress</h3>
          <h5 className="bg-slate-700 text-white px-3 py-1 text-xl rounded-2xl">0</h5>
        </div>

        {/* in progress */}
        <TasksCard />

      </div>
      <div>
        <div className="flex justify-between items-center bg-slate-300 py-3 px-2 rounded-2xl">
          <h3>Completed</h3>
          <h5 className="bg-slate-700 text-white px-3 py-1 text-xl rounded-2xl">0</h5>
        </div>

        {/* completed */}
        <TasksCard />

      </div>

    </section>
  );
};

export default Home;
