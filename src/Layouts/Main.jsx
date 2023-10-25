import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import OthersBar from "../components/OthersBar";
import Heading from "../components/Heading";
import { Provider } from "react-redux";

const Main = () => {
  return (
    <>

      <div className="grid grid-cols-[0.5fr,4fr,1fr] gap-x-4">
        <Sidebar />

        <div className="w-full">
          <Heading />
          <Outlet />
        </div>
        <div className="mr-5">

        <OthersBar />
        </div>
      </div>

    </>
  );
};

export default Main;
