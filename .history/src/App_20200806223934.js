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
          <div className="col-md-1 container h-100 border firstCol">
            <div className="row border logoRow justify-content-center">
              <Email className="m-auto logo" />
            </div>
            <div className="row border menuRow">
              <ul className="menuList m-auto p-0">
                <li className="menuItem">
                  <AccountBalance className="menuItemIcon" />
                </li>
                <li className="menuItem">
                  <Chat className="menuItemIcon"/>
                </li>
                <li className="menuItem">
                  <Person className="menuItemIcon"/>
                </li>
                <li className="menuItem">
                  <Palette className="menuItemIcon"/>
                </li>
                <li className="menuItem">
                  <Settings className="menuItemIcon"/>
                </li>
              </ul>
            </div>
            <div className="row border photoRow">
              <img src={require("./assets/m1.jpeg")} alt="profile"/>
            </div>
          </div>
          <div className="col-md-3 container h-100 border secondCol">
            <div className="row border searchRow">1</div>
            <div className="row border convRow">1</div>
            <div className="row border selectRow">1</div>
            <div className="row border groupsRow">1</div>
          </div>
          <div className="col-md-8 container border h-100 border thirdCol">
            <div className="row border chatInfo">1</div>
            <div className="row border chatMessages">1</div>
            <div className="row border chatInput">
              <div className="col-md-9 container border">
                <div className="row border inputEmoji">emo</div>
                <div className="row border inputText">text</div>
              </div>
              <div className="col-md-3 border">send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
