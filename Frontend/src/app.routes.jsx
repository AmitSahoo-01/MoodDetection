import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Procteted from "./features/auth/components/Procteted";
import Home from "./features/home/pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Procteted><Home/></Procteted>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

