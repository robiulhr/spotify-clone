import React from "react";
import { Typography } from "@mui/material";
import "./home.scss";
import PlaylistCart from "../../component/playlistCart";

const Home = ({featured}) => {

  return (
    <div className="Home-Wrapper">
      <div>
        <div className="home-content-div">
          {/* <Typography>{featured.message}</Typography> */}
          <div>
            {/* {featured?.playlists?.items.map((ele) => (
              <PlaylistCart
                key={ele.name}
                image={ele.images[0].url}
                name={ele.name}
                description={ele.description}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
