import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './Context/AuthContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}/>
        <Toaster/>
      </AuthContextProvider>
  </React.StrictMode>,
)
