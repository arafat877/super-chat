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

const ChatBox = ({ group, currentUser }) => {
  const [chatMessages, setChatMessages] = useState([]);

  const { messages, isFetching, error, dispatch } = useContext(MessageContext);

  useEffect(() => {
    group && getGroupMessages(group._id, dispatch);
  }, [group]);

  useEffect(() => {
    setChatMessages(messages);
  }, [messages]);

  console.log(group);
  return (
    <div className="col-md-7 col-sm-12 container h-100 thirdCol">
      {group && (
        <div className="row chatInfo">
          <div className="col-6 m-auto">
            {group.adminUserId ? (
              <>
                <img
                  className="infoUserPicture"
                  src={require(`../../assets/${group.groupPhoto}`)}
                  alt="User Profile"
                />
                <span className="infoUserName ml-2">{group.name}</span>
              </>
            ) : (
              <>
                <img
                  className="infoUserPicture"
                  src={require(`../../assets/${group.user.profilePicture}`)}
                  alt="User Profile"
                />
                <span className="infoUserName ml-2">{group.user.name}</span>
              </>
            )}
            <span className="infoTyping ml-2">( ... typing )</span>
          </div>
          <div className="col-4 mt-auto mb-auto justify-content-right infoGroup">
            {group.adminUserId && (
              <AvatarGroup max={6} className="float-right">
                <Avatar
                  alt={currentUser.name}
                  className="avatar"
                  src={require(`../../assets/${currentUser.profilePicture}`)}
                />
                {group.users.map((u) => (
                  <Avatar
                    alt={u.name}
                    className="avatar"
                    src={require(`../../assets/${u.profilePicture}`)}
                  />
                ))}
              </AvatarGroup>
            )}
          </div>
          <div className="col-2 m-auto">
            <span className="float-right">...</span>
          </div>
        </div>
      )}

      <div className="row chatMessages">
        <div className="container">
          {isFetching && (
            <>
              <div className="spinner-grow text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="ml-2 loading">Your messages are loading...</span>
            </>
          )}
          {messages &&
            messages.map((m) =>
              m.senderId === currentUser._id ? (
                <div className="row messageRowOwner mr-0 mt-3">
                  <div className="col-5 offset-6 text p-3">
                    {m.isDeleted ? (
                      <span className="deletedMessage">{m.text}</span>
                    ) : (
                      <>{m.text}</>
                    )}
                  </div>
                  <div className="col-1 mt-auto float-right">
                    <img
                      className="messageUserProfilePicture "
                      src={require(`../../assets/${currentUser.profilePicture}`)}
                      alt="User Profile"
                    />
                  </div>
                </div>
              ) : (
                <div className="row messageRow mt-3">
                  {group.adminUserId ? (
                    group.users.map(
                      (u) =>
                        u._id === m.senderId && (
                          <>
                            <img
                              className="messageUserProfilePicture mb-auto ml-2 mr-1"
                              src={require(`../../assets/${u.profilePicture}`)}
                              alt="User Profile"
                            />
                            <span className="mb-auto mr-2 groupUsername">
                              {u.name}
                            </span>
                          </>
                        )
                    )
                  ) : (
                    <img
                      className="messageUserProfilePicture mb-auto ml-2 mr-1"
                      src={require(`../../assets/${group.user.profilePicture}`)}
                      alt="User Profile"
                    />
                  )}
                  <div className="col-5 text p-3">
                    {m.isDeleted ? (
                      <span className="deletedMessage">{m.text}</span>
                    ) : (
                      <>{m.text}</>
                    )}
                  </div>
                </div>
              )
            )}
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
