import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTourists from "../components/AddTouristsSpotPage/AddTourists";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UpdateSpot from "../pages/UpdateSpot";
import MyListPage from "../pages/MylistPage";
import Details from "../pages/Details";
import Places from "../components/Places/Places";
import AddCountry from "../components/AddCountry/AddCountry";
import All from "../components/AddCountry/All";
import Selected from "../components/AllCountry/Selected";
import CountryDetails from "../pages/CountryDetails";

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
        path: '/spot/:id',
        element: <PrivateRoute><Details/></PrivateRoute>   
      },
      {
        path: '/allPlace',
        element: <Places/>  
      },
      {
        path: '/country', 
        element: <AddCountry/>
      },
      {
        path:'/country/:name',
        element: <Selected/>
      },

      {
        path: '/countryName/:id',
        element: <CountryDetails/>   
      },

      {
        path:'/all',
        element: <All/>
      }
    ],
  },
]);
