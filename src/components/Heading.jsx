import React, { useState } from "react";
import logo from "../assets/nexusFlow.png";
import { IoNotifications, IoSearchCircle } from "react-icons/io5";
import Profile from "./Profile";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import TaskModal from "./TaskModal";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center">

        <h3 className="text-2xl  mb-2 font-semibold -ml-5">
          Nexus<span className="text-slate-500"> Flow</span>
        </h3>
      </div>

      <div>
        <ul className="flex space-x-4 items-center text-2xl">
          <li className="text-gray-500 text-3xl hover:text-gray-700 duration-200 cursor-pointer">
            <IoSearchCircle />
          </li>

          <li className="text-gray-500 hover:text-gray-700 duration-200 cursor-pointer">
            <IoNotifications />
          </li>
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xs font-bold px-3 py-3 rounded-lg text-white bg-gray-500 hover:bg-gray-700 duration-200 "
            >
              Add Tasks
            </button>
          </li>

          <li>
            <Profile />
          </li>
        </ul>
        <TaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Heading;
