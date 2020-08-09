import React from "react";
import "./Chat.scss";
import LeftMenu from "../../components/leftMenu/LeftMenu";
import RightMenu from "../../components/rightMenu/RightMenu";
import Conversations from "../../components/conversations/Conversations";
import ChatBox from "../../components/chatBox/ChatBox";

const Chat = ({ currentUser }) => {
  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container mt-3 mb-3 appWrapper">
        <div className="row h-100">
          <LeftMenu currentUser={currentUser}/>
          <Conversations />
          <ChatBox />
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default Chat;
