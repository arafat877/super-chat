import React from "react";
import "./RightMenu.scss";
import {
    People,
  } from "@material-ui/icons";

const RightMenu = () => {
  return <div className="d-none d-sm-none d-md-block col-1 container h-100 fourthCol">
  <div className="row logoRow justify-content-center">
    <People className="logo m-auto" />
  </div>
  <div className="row friendsRow justify-content-center">
    <ul className="friendList m-auto p-0 text-center ">
      <li className="friendListItem">
        <img
          className="friendListItemPhoto"
          src={require("../../assets/m1.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">William</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/f1.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Mary</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/m2.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">John</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/f2.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Anna</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/m3.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Harry</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/f3.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Phebe</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/m4.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Alex</p>
      </li>
      <li className="friendListItem">
        <img
          className="m-auto friendListItemPhoto"
          src={require("../../assets/f4.jpeg")}
          alt="profile"
        />
        <img
          className="online"
          src={require("../../assets/online.png")}
          alt="profile"
        />
        <p className="friendName">Mina</p>
      </li>
    </ul>
  </div>
</div>;
};

export default RightMenu;
