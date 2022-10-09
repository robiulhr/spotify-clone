import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SpeakerGroupIcon from "@mui/icons-material/SpeakerGroup";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import './sideBar.scss'
const SideBar = () => {
  const token = window.localStorage.getItem("accesstoken");
  const [playlist, setPlaylist] = useState([]);
  const [data,setData ] = useState()

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setPlaylist(response.data.items);
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);
  console.log(token);
  return (
    <div className="SideBar">
      <Box className="sidebar-upper">
        <List
          sx={{
            "& a": {
              color: "inherit",
                "&:hover li":{
                  background:"#92adc1",
                  color:"#d3ecff"
                },
              "& li": {
                px: "25px",
                "& svg": {
                  mr: "10px",
                },
              },
            },
          }}
        >
          <Link to={"/"}>
            <ListItem>
              <SpeakerGroupIcon />
              Your Library
            </ListItem>
          </Link>
          <Link to={""}>
            <ListItem>
              <AddBoxIcon />
              Create Playlist
            </ListItem>
          </Link>
          <Link to={""}>
            <ListItem>
              <FavoriteIcon />
              Liked Song
            </ListItem>
          </Link>
        </List>
      </Box>
      <Divider sx={{ borderColor: "gray" }} />
      <div className="sidebar-lower">
        {playlist.length === 0 ? (
          <Typography sx={{ margin: "10px", textAlign: "center" }}>
            No playlist available
          </Typography>
        ) : (
          <List
            sx={{
              "& a": {
                color: "inherit",
                "&:hover li":{
                  background:"#92adc1",
                  color:"#d3ecff"
                },
                "& li": {
                  px: "25px",
                },
              },
            }}
          >
            {playlist.map((ele) => (
              <Link key={ele.name} to={`/playlist/${ele.id}`}>
                <ListItem className="playlist-item">
                  {ele.name}
                </ListItem>
              </Link>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

export default SideBar;
