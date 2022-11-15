import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Apoinment from "../pages/Apoinment/Apoinment/Apoinment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Singup from "../pages/Singup/Singup/Singup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/apoinment',
        element:<Apoinment></Apoinment>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<Singup></Singup>
      }
    ],
  },
]);
export default router;
