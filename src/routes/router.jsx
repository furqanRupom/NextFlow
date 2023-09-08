import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Main from "../Layouts/Main"




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

