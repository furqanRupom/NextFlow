import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import OthersBar from "../components/OthersBar";
import Heading from "../components/Heading";

const Main = () => {
  return (
    <>
      <Heading />
      <div className="grid grid-cols-[1fr,4fr,1fr]">
        <Sidebar />

        <div>
          <Outlet />
        </div>
        <OthersBar />
      </div>
    </>
  );
};

export default Main;
