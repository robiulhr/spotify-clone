import randomString from "random-string";
import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-position",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "app-remote-control",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-follow-modify",
  "user-follow-read",
];
export const state = randomString({ length: 20 });
export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: state,
  redirectUri:process.env.REACT_APP_REDIRECT_URL 
});
export const spotifyAuthenticateUrl = `${
  process.env.REACT_APP_AUTH_ENDPOINT
}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${
  process.env.REACT_APP_REDIRECT_URL
}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${scopes.join(
  " "
)}&state=${state}&show_dialog=true`;

export const ExtracAccessToken = (hash) => {
 return hash
    .substring(1)
    .split("&")
    .find((elem) => elem.startsWith("access_token"))
    .split("=")[1]
};
