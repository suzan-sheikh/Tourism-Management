import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTourists from "../components/AddTouristsSpotPage/AddTourists";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PropertyDetails from "../pages/PropertyDetails";
import UpdateSpot from "../pages/UpdateSpot";
import MyListPage from "../pages/MylistPage";
import About from "../pages/About";
import Details from "../pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,    
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addTourist",
        element: <PrivateRoute><AddTourists/></PrivateRoute>
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyListPage/> </PrivateRoute> 
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },      
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateSpot/></PrivateRoute>  
      },
      {
        path: '/about',
        element: <Details/>  
      },

      // {
      //   path: "/book/:id",
      //   element: <PrivateRoute>
      //     <PropertyDetails />,
      //   </PrivateRoute>,   
      //   loader: () =>
      //     // fetch("property.json"),
      //     fetch("http://localhost:4000/spot"),
      // },
    ],
  },
]);
