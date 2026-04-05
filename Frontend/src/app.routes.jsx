import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Procteted from "./features/auth/components/Procteted";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Procteted><h1>Home</h1></Procteted>,
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

