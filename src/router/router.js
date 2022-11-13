import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Apoinment from "../pages/Apoinment/Apoinment/Apoinment";
import Home from "../pages/Home/Home/Home";

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
      }
    ],
  },
]);
export default router;
