import React,{useEffect} from 'react';
import axios from "axios";
const Playlist = () => {
    const token = window.localStorage.getItem("accesstoken");
    useEffect(() => {
      axios
        .get("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          // handle success
          console.log(response.data)
        })
        .catch((error) => {
          // handle error
        });
    }, [token]);
    return (
        <div className='playlist-wrapper'>
            
        </div>
    );
}

export default Playlist;
