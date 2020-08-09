import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Chat from "./pages/chat/Chat"

import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

function App() {
  return (
    <Chat ></Chat>
  );
}

export default App;
