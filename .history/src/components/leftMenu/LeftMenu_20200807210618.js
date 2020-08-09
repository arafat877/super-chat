import React from "react";
import "./LeftMenu.scss";
import {
  Email,
  Chat as ChatIcon,
  Person,
  Settings,
  Palette,
  AccountBalance,
} from "@material-ui/icons";

const LeftMenu = ({ currentUser }) => {
  return (
    <div className="col-1 d-none d-sm-none d-md-block container h-100 firstCol">
      <div className="row logoRow justify-content-center">
        <Email className="m-auto logo" />
      </div>
      <div className="row menuRow">
        <ul className="menuList m-auto p-0">
          <li className="menuItem">
            <AccountBalance className="menuItemIcon" />
          </li>
          <li className="menuItem">
            <ChatIcon className="menuItemIcon" />
          </li>
          <li className="menuItem">
            <Person className="menuItemIcon" />
          </li>
          <li className="menuItem">
            <Palette className="menuItemIcon" />
          </li>
          <li className="menuItem">
            <Settings className="menuItemIcon" />
          </li>
        </ul>
      </div>
      <div className="row photoRow justify-content-center">
        <img
          className="m-auto profilePhoto"
          src={require(`../../assets/${currentUser.profilePicture}`)}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default LeftMenu;
