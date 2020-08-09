import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/chat"}>
          <Chat/>
        </Route>
        <Route path={"/profile"}>
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
