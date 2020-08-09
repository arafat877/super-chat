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
import { AuthContextProvider } from "./context/auth/AuthContex";

function App() {
  
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Register />
          </Route>
          <Route path={"/register"}>
            <Register />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/chat"}>
            <Chat />
          </Route>
          <Route path={"/profile/:username"}>
            <Profile />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
