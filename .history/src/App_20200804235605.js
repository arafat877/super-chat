import React from "react";
import "./App.scss";
import logo from "./assets/logo.png";
import {
  Message,
  GroupWork,
  Chat,
  Palette,
  Settings,
  PeopleAlt,
} from "@material-ui/icons";

function App() {
  return (
    <div className="appContainer">
      <div className="appWrapper">
        <div className="mainColumn">
          <div className="mcLogo">
            <Message className="logo"/>
          </div>
          <div className="mcList">
            <ul className="mainList">
              <li className="mainListItem">
                <GroupWork className="listItemIcon" />
              </li>
              <li className="mainListItem">
                <Chat className="listItemIcon" />
              </li>
              <li className="mainListItem">
                <PeopleAlt className="listItemIcon" />
              </li>
              <li className="mainListItem">
                <Palette className="listItemIcon" />
              </li>
              <li className="mainListItem">
                <Settings className="listItemIcon" />
              </li>
            </ul>
          </div>
          <div className="mcPhoto">
            <img
              className="profilePicture"
              src={require("./assets/m1.jpeg")}
              alt="Profile"
            />
          </div>
        </div>
        <div className="conversationsColumn">
          <div className="ccSearch">
            <input placeholder="Search your friend"/>
          </div>
          <div className="ccTitle">
            <span className="ccTitleSpan">Conversations</span>
          </div>
          <div className="ccSelection">selections</div>
          <div className="ccAllChat">all chat</div>
          {/* <div className="ccPrivate">private</div>
          <div className="ccGroups">groups</div> */}
        </div>
        <div className="messagesColumn">
          <div className="mecInfo">Message info</div>
          <div className="mecWindow">Chat Window</div>
          <div className="mecInput">
            <div className="inputColumn">
              <div className="inputSelection">selection</div>
              <div className="inputArea">inputArea</div>
            </div>
            <div className="inputSend">send</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
