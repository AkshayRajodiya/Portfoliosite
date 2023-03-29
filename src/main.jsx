import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'font-awesome/css/font-awesome.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutme from './component/Aboutme'
import Project from './component/Project'
import Contact from './component/Contact'
import Skill from './component/Skill'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/logo",
        element: <App />,
      },
       
    {
      path: "/home",
      element: <App />,
    }
    ],
  },
  {
    path: "/about-me",
    element: <Aboutme />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/skill",
    element: <Skill />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
