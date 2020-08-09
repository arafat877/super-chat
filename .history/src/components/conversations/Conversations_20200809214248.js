import React, { useState, useEffect, useContext } from "react";
import "./Conversations.scss";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { ConversationContext } from "../../context/conversation/ConversationContext";
import {
  getPrivateConversations,
  getGroupConversations,
} from "../../apiCalls/conversationApiCalls";
import { format } from "timeago.js";

const Conversations = ({ currentUser }) => {
  const [privateConversations, setPrivateConversations] = useState([]);
  const [groupConversations, setGroupConversations] = useState([]);
  const [allConversations, setAllConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(allConversations);

  const { conversations, isFetching, error, dispatch } = useContext(
    ConversationContext
  );

  useEffect(() => {
    getPrivateConversations(currentUser._id, dispatch);
    getGroupConversations(currentUser._id, dispatch);
    setSelectedConversation(allConversations)
  }, []);

  useEffect(() => {
    setPrivateConversations(conversations.privateConversations);
  }, [conversations.privateConversations]);

  useEffect(() => {
    setGroupConversations(conversations.groupConversations);
  }, [conversations.groupConversations]);

  useEffect(() => {
    setAllConversations(
      privateConversations
        .concat(groupConversations)
        .sort((a, b) => a.lastMessage.date - b.lastMessage.date)
    );
  }, [privateConversations, groupConversations]);

  return (
    <div className="col-md-3 col-sm-12 container h-100 secondCol p-4">
      <div className="row searchRow">
        <input className="searchInput" placeholder="Search..." />
      </div>
      <div className="row convRow mt-2">
        <span className="convSpan">Conversations</span>
      </div>
      <div className="row selectRow mb-1">
        <ul className="selectionList pl-0">
          <li
            className="selectionListItem d-inline mr-2"
            style={{ borderBottom: "solid 0.05px #3576ef" }}
            onClick={() => setSelectedConversation(allConversations)}
          >
            All Chat
          </li>
          |
          <li
            className="selectionListItem d-inline mr-2 ml-2"
            onClick={() => setSelectedConversation(privateConversations)}
          >
            Private
          </li>
          |
          <li
            className="selectionListItem d-inline mr-2 ml-2"
            onClick={() => setSelectedConversation(groupConversations)}
          >
            Groups
          </li>
        </ul>
      </div>
      <div className="row groupsRow">
        <div className="container">
          {isFetching && (
            <>
              <div className="spinner-grow text-primary m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <span className="ml-2 loading">Your chat is loading...</span>
            </>
          )}
          {selectedConversation.map((a) =>
            a.adminUserId ? (
              <div
                className="row convCardGroup pt-3 pb-3 pl-2 mt-3"
                key={a._id}
              >
                <div className="container">
                  <div className="row">
                    <img
                      className="userProfilePicture"
                      src={require(`../../assets/${a.groupPhoto}`)}
                      alt="User Profile"
                    />
                    <span className="userName ml-2">{a.name}</span>
                    <span className="dash ml-2">-</span>
                    {a.lastMessage && (
                      <span className="chatDate ml-2 mt-1">
                        {format(a.lastMessage.date)}
                      </span>
                    )}
                  </div>
                  <hr></hr>
                  <div className="row">
                    {a.lastMessage && (
                      <span className="text">{a.lastMessage.text}</span>
                    )}
                  </div>
                  <hr></hr>
                  <div className="row">
                    <AvatarGroup max={6} className="mr-4">
                      <Avatar
                        alt={currentUser.name}
                        className="avatar"
                        src={require(`../../assets/${currentUser.profilePicture}`)}
                      />
                      {a.users.map((u) => (
                        <Avatar
                          key={u._id}
                          alt={u.name}
                          className="avatar"
                          src={require(`../../assets/${u.profilePicture}`)}
                        />
                      ))}
                    </AvatarGroup>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row convCard pt-3 pb-3 pl-2 mt-3" key={a._id}>
                <div className="container">
                  <div className="row">
                    <img
                      className="userProfilePicture"
                      src={require(`../../assets/${a.user.profilePicture}`)}
                      alt="User Profile"
                    />
                    <span className="userName ml-2">{a.user.name}</span>
                    <span className="dash ml-2">-</span>
                    <span className="chatDate ml-2 mt-1">
                      {format(a.lastMessage.date)}
                    </span>
                  </div>
                  <hr></hr>
                  <div className="row">
                    {a.lastMessage && (
                      <span className="text">{a.lastMessage.text}</span>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Conversations;
