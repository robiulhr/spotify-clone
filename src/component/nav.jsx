import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
const Nav = ({ user }) => {
  let [userProfile, setUserProfile] = useState();
  useEffect(() => {
    if (user.images) {
      setUserProfile(user?.images[0]?.url);
      console.log(userProfile)
    }
  }, [userProfile]);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#082644cf" }}>
      <Container maxWidth="2xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MUSIC WORLD
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userProfile} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", "& li": { padding: "10px 60px 10px 20px" } }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleLogout}
            >
              <MenuItem key={"Profile"} onClick={() => setAnchorElUser(null)}>
                <Typography textAlign="center">{"Profile"}</Typography>
              </MenuItem>
              <MenuItem key={"Account"} onClick={() => setAnchorElUser(null)}>
                <Typography textAlign="center">{"Account"}</Typography>
              </MenuItem>
              <MenuItem key={"Dashboard"} onClick={() => setAnchorElUser(null)}>
                <Typography textAlign="center">{"Dashboard"}</Typography>
              </MenuItem>
              <MenuItem
                key={"Logout"}
                sx={{ "& a": { textDecoration: "none", color: "inherit" } }}
              >
                <Link to={"/confirmlogout"}>
                  <Typography textAlign="center">{"Logout"}</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
