import React from "react";
import "../../components/component.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MessageIcon from "@mui/icons-material/Message";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-search-box">
        <input type="text" placeholder="Rechercher"></input>
        <SearchIcon className="icon" />
      </div>
      <div className="admin-nav-menu">
        <ul>
          <li>
            <NotificationsActiveIcon className="icon" />
            <div className="notif-count">3</div>
          </li>
          <li>
            <MessageIcon className="icon" />
            <span className="notif-count">4</span>
          </li>
          <li className="profile">
            <img
              src="https://www.coth.fr/wp-content/uploads/2018/05/doctor_homme_coth.png"
              alt="profile admin"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
