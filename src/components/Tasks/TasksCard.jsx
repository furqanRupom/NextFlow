import React from 'react'
import { FaDeleteLeft, FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/tasksSlice';
import { useSelector } from "react-redux";
const TasksCard = ({task}) => {
  const dispatch = useDispatch();


  let updatedStatus;

  if(task?.status === 'pending'){
    updatedStatus = 'running'
  }
  else if(task?.status === 'running'){
    updatedStatus = 'done'
  }
  else{
    updatedStatus = 'archive'
  }

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-12">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {task?.date || "30 Aug 2014"}
        </span>
        <div>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabIndex="0"
            role="button"
          >
            {task?.status || "pending"}
          </a>
          <a
            className={`px-3 py-1 text-xs font-bold ${task?.priority === 'low' ? 'text-orange-400':task?.priority === 'medium' ? 'text-lime-300' : 'text-green-400'} transition-colors duration-300 transform rounded cursor-pointer ml-2`}
            tabIndex="0"
            role="button"
          >
            {task?.priority || "low"}
          </a>
        </div>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          tabIndex="0"
          role="link"
        >
          {task?.name || "Accessibility tools for designers and developers"}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {task?.description ||
            `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!`}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => dispatch(removeTask(task.id))}
          className="text-red-600 dark:text-red-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          <FaDeleteLeft />
        </button>

        <button
          onClick={() =>
            dispatch(updateStatus({ id: task?.id, status: updatedStatus }))
          }
          className="text-green-600 dark:text-green-400 hover:underline"
          tabIndex="0"
          role="link"
        >
          <FaUpRightAndDownLeftFromCenter />
        </button>

        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <a
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
            tabIndex="0"
            role="link"
          >
            {task?.author}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TasksCard
