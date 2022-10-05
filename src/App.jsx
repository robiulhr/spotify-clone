import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import PageNotFound from "./pages/pageNotFound";
import "./main.scss";
import Login from "./pages/login";
import Home from "./pages/home/home";
import { ExtracAccessToken } from "./utils/spotify";
import ConfirmLogout from "./pages/confirmLogout";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
    loader: ({ params }) => {
      const hash = window.location.hash;
      let accesstoken = window.localStorage.getItem("accesstoken");
      if (!accesstoken && hash) {
        accesstoken = ExtracAccessToken(hash);
        window.location.hash = "";
        window.localStorage.setItem("accesstoken", accesstoken);
      }
      if(!accesstoken) return redirect("/login");

    },
  },
  {
    path: "login",
    element: <Login />,
    loader:({params})=>{
      let accesstoken = window.localStorage.getItem("accesstoken");
      if(accesstoken) return redirect("/")
    }
  },
  {
    path:"confirmlogout",
    element:<ConfirmLogout/>,
    loader:({params})=>{
      let accesstoken = window.localStorage.getItem("accesstoken");
      if(!accesstoken) return redirect("/login")
    }
  }
]);

export default App;
