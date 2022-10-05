import React, { useEffect } from "react";
import axios from "axios";
import { setUser, setErroMassage } from "../../app/reducer/appReducer";
import {  useDispatch } from "react-redux";
import Nav from "../../component/nav";

const Home = () => {
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("accesstoken");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        // handle success
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        // handle error
        dispatch(setErroMassage("something went wrong."));
      });
  },[dispatch,token]);


  return <div>
      <Nav/>
  </div>;
};

export default Home;
