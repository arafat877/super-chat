import React from "react";
import "./Chat.scss";
import {
  Email,
  Chat as ChatIcon,
  Person,
  Settings,
  Palette,
  AccountBalance,
  AttachFile,
  SentimentSatisfiedAlt,
  Room,
  ContactMail,
  People,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const Chat = () => {
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
                src={require("../../assets/m1.jpeg")}
                alt="profile"
              />
            </div>
          </div>
          <div className="col-3 container h-100 secondCol p-4">
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
              <div className="container">
                <div className="row convCard pt-3 pb-3 pl-2 mt-3">
                  <div className="container">
                    <div className="row">
                      <img
                        className="userProfilePicture"
                        src={require("../../assets/m1.jpeg")}
                        alt="User Profile"
                      />
                      <span className="userName ml-2">Adam Brown</span>
                      <span className="dash ml-2">-</span>
                      <span className="chatDate ml-2 mt-1">Today</span>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <span className="text">Hi man whats up?</span>
                    </div>
                  </div>
                </div>

                <div className="row convCardHot pt-4 pb-3 pl-2 mt-3">
                  <div className="container">
                    <div className="row">
                      <img
                        className="userProfilePicture"
                        src={require("../../assets/f1.jpeg")}
                        alt="User Profile"
                      />
                      <span className="userName ml-2">Alexandra Gala</span>
                      <span className="dash ml-2">-</span>
                      <span className="chatDate ml-2 mt-1">2 days ago</span>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <span className="text">
                        Similar to headers and footers, cards can include top
                        and bottom.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row convCardGroup pt-3 pb-3 pl-2 mt-3">
                  <div className="container">
                    <div className="row">
                      <img
                        className="userProfilePicture"
                        src={require("../../assets/g1.jpeg")}
                        alt="User Profile"
                      />
                      <span className="userName ml-2">3 Idiots</span>
                      <span className="dash ml-2">-</span>
                      <span className="chatDate ml-2 mt-1">2 days ago</span>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <span className="text">
                        You can use the border property to style a hr element.
                      </span>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <AvatarGroup max={3} className="mr-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 container h-100 thirdCol">
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
                    The MuiAvatar name can be used for providing default props
                    or style overrides at the theme level.
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
                    The MuiAvatar name can be used for providing default props
                    or style overrides at the theme level.
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
          <div className="col-1 container h-100 fourthCol">
            <div className="row logoRow justify-content-center">
              <People className="logo m-auto" />
            </div>
            <div className="row friendsRow">
              <ul className="friendList m-auto">
                <li className="friendListItem">
                  <img
                    className="m-auto friendListItemPhoto"
                    src={require("../../assets/m1.jpeg")}
                    alt="profile"
                  />
                  <p>John</p>
                </li>
                <li className="friendListItem">
                  <img
                    className="m-auto friendListItemPhoto"
                    src={require("../../assets/m1.jpeg")}
                    alt="profile"
                  />
                  <p>Mary</p>
                </li>
                <li className="friendListItem">
                  <img
                    className="m-auto friendListItemPhoto"
                    src={require("../../assets/m1.jpeg")}
                    alt="profile"
                  />
                  <p>William</p>
                </li>
                <li className="friendListItem">
                  <img
                    className="m-auto friendListItemPhoto"
                    src={require("../../assets/m1.jpeg")}
                    alt="profile"
                  />
                  <p>Evelyn</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
