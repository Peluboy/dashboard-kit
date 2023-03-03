import React from "react";

import "../Header/header.css";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { Menu, Popover } from "@headlessui/react";

import ProfilePic from "../../assets/images/headerAvatar.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  let currentPage = location.pathname;
  const firstLetter = currentPage.charAt(1).toUpperCase();
  const page = firstLetter + currentPage.slice(2);

  return (
    <div className="navbar">
      <div className="dashboard_header">
        <h3>{page}</h3>

        <div className="noti_profile">
          <div className="notifications">
            <Popover className="noti">
              <Popover.Button className="popover-primary">
                <SearchRoundedIcon />
                <NotificationsRoundedIcon />
                <span className="noti_bubble"></span>
              </Popover.Button>
            </Popover>
          </div>

          <span className="divider-1"></span>

          <Menu as="div" className="menu_style">
            <div>
              <Menu.Button className="menu_button">
                <span className="user_name">Jones Ferdinand</span>
                <img src={ProfilePic} alt="" className="profile_pic" />
              </Menu.Button>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
