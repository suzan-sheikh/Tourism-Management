import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTourists from "../components/AddTouristsSpotPage/AddTourists";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,    
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addTourist",
        element: <PrivateRoute><AddTourists/></PrivateRoute>
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
