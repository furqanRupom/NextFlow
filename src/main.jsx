import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Sidebar from "./components/Sidebar";
import OthersBar from "./components/OthersBar";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <section className="font-Sora grid grid-cols-[1fr,3fr,2fr] bg-slate-950">
      <Sidebar />
      <RouterProvider router={router} />
      <OthersBar />
    </section>

    </Provider>
  </React.StrictMode>
);
