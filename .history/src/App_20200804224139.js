import React from "react";
import "./App.scss";
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="appContainer">
      <div className="appWrapper">
        <div className="mainColumn">
          <div className="mcLogo"><img className="logo" src={logo} alt="logo"/></div>
          <div className="mcList">list</div>
          <div className="mcPhoto">pp</div>
        </div>
        <div className="conversationsColumn">
          <div className="ccSearch">search</div>
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
