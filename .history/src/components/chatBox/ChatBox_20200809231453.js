import React, { useState, useEffect, useContext } from "react";
import "./ChatBox.scss";

import {
  AttachFile,
  SentimentSatisfiedAlt,
  Room,
  ContactMail,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { getGroupMessages } from "../../apiCalls/messageApiCall";
import { MessageContext } from "../../context/message/MessageContext";

const ChatBox = ({ group }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const { messages, isFetching, error, dispatch } = useContext(MessageContext);

  useEffect(() => {
    getGroupMessages(group._id, dispatch);
  }, [group]);

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);
  return (
    <div className="col-md-7 col-sm-12 container h-100 thirdCol">
      <div className="row chatInfo">
        <div className="col-6 m-auto">
          <img
            className="infoUserPicture"
            src={require("../../assets/f1.jpeg")}
            alt="User Profile"
          />
          <span className="infoUserName ml-2">Judie Garcia</span>
          <span className="infoTyping ml-2">( ... typing )</span>
        </div>
        <div className="col-4 mt-auto mb-auto justify-content-right infoGroup">
          <AvatarGroup max={3} className="float-right">
            <Avatar
              alt="Remy Sharp"
              className="avatar"
              src={require("../../assets/m1.jpeg")}
            />
            <Avatar
              alt="Travis Howard"
              className="avatar"
              src={require("../../assets/f1.jpeg")}
            />
            <Avatar
              alt="Cindy Baker"
              className="avatar"
              src={require("../../assets/g1.jpeg")}
            />
          </AvatarGroup>
        </div>
        <div className="col-2 m-auto">
          <span className="float-right">...</span>
        </div>
      </div>
      <div className="row chatMessages">
        <div className="container">
          {/* MessageRow */}
          <div className="row messageRow mt-3">
            <img
              className="messageUserProfilePicture mb-auto ml-2 mr-3"
              src={require("../../assets/f1.jpeg")}
              alt="User Profile"
            />
            <div className="col-5 text p-3">
              The MuiAvatar name can be used for providing default props or
              style overrides at the theme level.
            </div>
          </div>

          {/* MessageRow Owner*/}
          <div className="row messageRowOwner mr-0 mt-3">
            <div className="col-5 offset-6 text p-3">
              Third value applies to bottom-right corner, and fourth value
              applies to bottom-left corner.
            </div>
            <div className="col-1 mt-auto float-right">
              <img
                className="messageUserProfilePicture "
                src={require("../../assets/f1.jpeg")}
                alt="User Profile"
              />
            </div>
          </div>
          {/* MessageRow */}
          <div className="row messageRow mt-3">
            <img
              className="messageUserProfilePicture mb-auto ml-2 mr-3"
              src={require("../../assets/f1.jpeg")}
              alt="User Profile"
            />
            <div className="col-5 text p-2">Okay!</div>
          </div>
          {/* MessageRow */}
          <div className="row messageRowOwner mr-0 mt-3">
            <div className="col-5 offset-6 text p-3">
              Force sibling columns away from one another.
            </div>
            <div className="col-1 mt-auto float-right">
              <img
                className="messageUserProfilePicture "
                src={require("../../assets/f1.jpeg")}
                alt="User Profile"
              />
            </div>
          </div>
          {/* MessageRow */}
          <div className="row messageRow mt-3">
            <img
              className="messageUserProfilePicture mb-auto ml-2 mr-3"
              src={require("../../assets/f1.jpeg")}
              alt="User Profile"
            />
            <div className="col-5 text p-3">
              The MuiAvatar name can be used for providing default props or
              style overrides at the theme level.
            </div>
          </div>
          {/* MessageRow */}
        </div>
      </div>
      <div className="row chatInput">
        <div className="col-md-10 container">
          <div className="row inputEmoji">
            <ul className="emojiList p-0">
              <li className="emojiListItem d-inline ml-3">
                <AttachFile className="emojiListItemIcon" />
              </li>
              <li className="emojiListItem d-inline ml-3">
                <SentimentSatisfiedAlt className="emojiListItemIcon" />
              </li>
              <li className="emojiListItem d-inline ml-3">
                <Room className="emojiListItemIcon" />
              </li>
              <li className="emojiListItem d-inline ml-3">
                <ContactMail className="emojiListItemIcon" />
              </li>
            </ul>
          </div>
          <div className="row inputText">
            <input
              className="input ml-0 pl-4"
              placeholder="Write something..."
              autoFocus={true}
            />
          </div>
        </div>
        <div className="col-md-2 d-flex">
          <button className="btn btn-primary m-auto">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
