import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Chat from "./pages/chat/Chat"


function App() {
  return (
    <Chat ></Chat>
  );
}

export default App;
