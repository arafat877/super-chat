import React from "react";
import "./App.scss";
import {
  Email,
  Chat,
  Person,
  Settings,
  Palette,
  AccountBalance,
} from "@material-ui/icons";

function App() {
  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container mt-3 mb-3 appWrapper">
        <div className="row h-100">
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
                  <Chat className="menuItemIcon" />
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
                src={require("./assets/m1.jpeg")}
                alt="profile"
              />
            </div>
          </div>
          <div className="col-3 container h-100 secondCol">
            <div className="row searchRow">
              <input className="searchInput" placeholder="Search..." />
            </div>
            <div className="row convRow">
              <span className="convSpan">Conversations</span>
            </div>
            <div className="row selectRow">
              <ul className="selectionList p-0">
                <li
                  className="selectionListItem d-inline mr-2"
                  style={{ borderBottom: "solid 0.05px white" }}
                >
                  All Chat
                </li>
                |
                <li className="selectionListItem d-inline mr-2 ml-2">
                  Private
                </li>
                |
                <li className="selectionListItem d-inline mr-2 ml-2">Groups</li>
              </ul>
            </div>
            <div className="row groupsRow">
              <div className="p-3">
                <img
                  className="userProfilePicture"
                  src={require("./assets/m1.jpeg")}
                  alt="User Profile"
                />
                <span className="userName ml-2">Adam Brown</span>
                <span className="dash ml-2">-</span>
                <span className="chatDate ml-2">2 days ago</span>
                <hr></hr>
                <span className="text">
                  Similar to headers and footers, cards can include top and
                  bottom ???image caps??????images at the top or bottom of a card.
                </span>
              </div>
            </div>
          </div>
          <div className="col-8 container h-100 thirdCol">
            <div className="row chatInfo">1</div>
            <div className="row chatMessages">1</div>
            <div className="row chatInput">
              <div className="col-md-9 container">
                <div className="row inputEmoji">emo</div>
                <div className="row inputText">text</div>
              </div>
              <div className="col-md-3">send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
