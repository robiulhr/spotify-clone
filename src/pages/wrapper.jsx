import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/sideBar";
import Nav from "../component/nav";
import "./wrapper.scss";
import { spotifyApi } from "../utils/spotify";
import { useNavigate } from "react-router-dom";

const Wrapper = () => {
  const navigate = useNavigate();
  // const [featured, setFeatured] = useState({});
  // useEffect(() => {
  //   spotifyApi.setAccessToken(token);
  //   spotifyApi
  //     .getFeaturedPlaylists()
  //     .then((response) => {
  //       setFeatured(response.body);
  //     })
  //     .catch((err) => {
  //       navigate("/login");
  //       window.localStorage.removeItem("accesstoken");
  //     });
  // }, [navigate]);



  let [user, setUser] = useState({});
  useEffect(() => {
  const token = window.localStorage.getItem("accessToken");
  spotifyApi.setAccessToken(token);
    spotifyApi
      .getMe()
      .then((response) => {
        setUser(response.body);
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="main-wrapper">
      <Nav user={user} />
      <div className="main-content">
        <div className="sidebar-wrapper">{/* <SideBar /> */}</div>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
