import React from "react";
import { AiOutlineVerified } from "react-icons/ai";

const MyTasks = ({ myTasks }) => {
  console.log(myTasks);
  return (
    <div>
      <section className=" p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl mt-12">
        <h2 className="font-semibold text-gray-800 dark:text-white">
          🍪{myTasks?.name}
        </h2>

        <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
          <button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
            {myTasks?.status}
          </button>

          <button className="text-xl">
            <AiOutlineVerified />
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyTasks;
