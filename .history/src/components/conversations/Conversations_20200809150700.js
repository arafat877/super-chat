import React, { useState, useEffect, useContext } from "react";
import "./Conversations.scss";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { ConversationContext } from "../../context/conversation/ConversationContext";
import { getPrivateConversations } from "../../apiCalls/conversationApiCalls";
import { getUser } from "../../apiCalls/userApiCalls";

const Conversations = ({ currentUser }) => {
  const [privateConversations, setPrivateConversations] = useState([]);
  const [groupConversations, setGroupConversations] = useState([]);

  const { isFetching, error, dispatch } = useContext(ConversationContext);

  useEffect(() => {
    getPrivateConversations(currentUser._id, setPrivateConversations, dispatch);
  }, []);

  useEffect(()=>{
    privateConversations.map(p=>{
      const id = p.members.filter(m=>m._id !== currentUser._id)[0]
      console.log(currentUser._id)
      console.log(id)
      // getUser(id).then(res=>p = {...p, user:res.data})
    })
  },[privateConversations])

  console.log(privateConversations)

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
          >
            All Chat
          </li>
          |<li className="selectionListItem d-inline mr-2 ml-2">Private</li>|
          <li className="selectionListItem d-inline mr-2 ml-2">Groups</li>
        </ul>
      </div>
      <div className="row groupsRow">
        <div className="container">
          {/* {privateConversations.map((p) => (
            <div className="row convCard pt-3 pb-3 pl-2 mt-3">
              <div className="container">
                <div className="row">
                  <img
                    className="userProfilePicture"
                    src={require(`../../assets/${p.user.profilePicture}`)}
                    alt="User Profile"
                  />
                  <span className="userName ml-2">{p.user.name}</span>
                  <span className="dash ml-2">-</span>
                  <span className="chatDate ml-2 mt-1">Today</span>
                </div>
                <hr></hr>
                <div className="row">
                  <span className="text">{p.lastMessage}</span>
                </div>
              </div>
            </div>
          ))} */}

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
                  Similar to headers and footers, cards can include top and
                  bottom.
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
  );
};

export default Conversations;
