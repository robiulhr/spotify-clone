import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImage from "../assets/img/music-club.jpg";
import spotifyLogo from "../assets/img/logo/spotify-logo.png";
import { spotifyAuthenticateUrl, ExtracAccessToken } from "../utils/spotify";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { spotifyApi } from "../utils/spotify";
const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
  let token ="";
    const hash = window.location.hash;
    if (hash) {
        token = ExtracAccessToken(hash);
      window.localStorage.setItem("accessToken", token);
       window.location.hash = "";
    }
    spotifyApi.setAccessToken(token);
    if (token) navigate("/");
  }, [navigate]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{ background: "#a2373ea1" }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to Music World
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleLoginSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Box component="div" noValidate>
              <Button
                type="submit"
                component="a"
                fullWidth
                variant="contained"
                href={spotifyAuthenticateUrl}
                sx={{
                  width: "max-content",
                  mt: 3,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "transparent",
                  border: "1px solid #1976d2",
                  borderRadius: "20px",
                }}
              >
                <Avatar sx={{ mx: 1, bgcolor: "transparent" }}>
                  <img
                    src={spotifyLogo}
                    className="spotify-logo"
                    alt="spotify logo"
                  />
                </Avatar>
                <Typography sx={{ mx: 2 }}>Sign In with spotify</Typography>
              </Button>
            </Box>
            <Box
              component={"div"}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
