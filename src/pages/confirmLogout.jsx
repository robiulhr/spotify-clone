import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./confirmLogout.scss";
const ConfirmLogout = () => {
  const navigate = useNavigate();
    let user = {}
  let userProfile, display_name, followers, country, userEmail;
  if (user) {
    // userProfile = user.images[0].url;
    // display_name = user.display_name;
    // followers = user.followers.total;
    // country = user.country;
    // userEmail = user.email;
  }
  const removeToken = () => {
    window.localStorage.removeItem("accesstoken");
    navigate("/login");
  };

  return (
    <div>
      {/* <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src={userProfile} alt="profile card" />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{display_name}</div>
            <div className="profile-card-inf">
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__txt">Followers</div>
                <div className="profile-card-inf__title">{followers}</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__txt">Country</div>
                <div className="profile-card-inf__title">{country}</div>
              </div>

              <div className="profile-card-inf__item">
                <div className="profile-card-inf__txt">Email</div>
                <div className="profile-card-inf__title">{userEmail}</div>
              </div>
            </div>
            <div className="confirm-logout-wrapper">
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">
                  Are sure you want to log out?
                </div>
                <div className="confirm-buttons-wrapper">
                <Link to={"/"}>
                <Button variant="outlined">Cencel</Button>

                </Link>
                    <Button variant="outlined" color="error" onClick={removeToken}>
                      Confirm
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ConfirmLogout;
