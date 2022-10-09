import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/pageNotFound";
import "./main.scss";
import Login from "./pages/login";
import Home from "./pages/home/home";
import ConfirmLogout from "./pages/confirmLogout";
import Wrapper from "./pages/wrapper";
import Playlist from "./pages/Playlist";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    // errorElement: <PageNotFound />,
    children:[{
        path: "/",
        element: <Home />,
    },
    {
      path:"/playlist/:id",
      element:<Playlist/>
    }
  ]
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path:"confirmlogout",
    element:<ConfirmLogout/>,
    errorElement: <PageNotFound />,
  }
]);

export default App;
