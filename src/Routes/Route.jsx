import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTourists from "../components/AddTouristsSpotPage/AddTourists";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    ErrorPage: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addTourist",
        element: <AddTourists/>
      },
      {
        path: "/myList",
        element: <About/> 
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);