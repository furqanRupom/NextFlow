import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";

const TaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addTask(data));
    console.log(data);
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-gray-600 font-bold text-center py-3">Add Task</h3>

          <div className="flex flex-col space-y-1">
            <label htmlFor="name">Name</label>
            <input
              className="rounded-lg form-input "
              {...register("name")}
              type="text"
            />
          </div>

          <div className="flex flex-col space-y-1 mt-4">
            <label htmlFor="description">description</label>
            <textarea
              className="rounded-lg form-input"
              {...register("description")}
              name="description"
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <label htmlFor="description">description</label>
            <input className="form-input rounded-lg" type="date" />
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <label htmlFor="author">Author</label>
            <select className="form-select rounded-lg" {...register("author")}>
              <option value="rupom">Rupom</option>
              <option value="rakib">rakib</option>
              <option value="rohan">rohan</option>
              <option defaultValue value="Esha">
                Esha
              </option>
              <option value="Tisha">Tisha</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1 mt-4">
            <label htmlFor="priority">priority</label>
            <select
              className="rounded-lg  form-select"
              {...register("priority")}
            >
              <option defaultValue value="high">
                high
              </option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </div>

          <button
            className="px-8 py-3 rounded bg-gray-500 text-white font-semibold my-3 hover:bg-gray-600 duration-200"
            type="submit"
          >
            Add Task
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 rounded bg-red-500 text-white font-semibold my-3 hover:bg-red-600 duration-200 ml-2"
            type="submit"
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TaskModal;
