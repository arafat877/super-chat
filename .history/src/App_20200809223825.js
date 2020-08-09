import React, { useContext } from "react";
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
import { AuthContextProvider, AuthContext } from "./context/auth/AuthContext";
import { ConversationContextProvider } from "./context/conversation/ConversationContext";

import { MessageContextProvider } from "./context/message/MessageContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <ConversationContextProvider>
        <MessageContextProvider>
          <Router>
            <Switch>
              <Route exact path={"/"}>
                {currentUser.token === null ? (
                  <Register />
                ) : (
                  <Chat currentUser={currentUser} />
                )}
              </Route>
              <Route path={"/register"}>
                {currentUser.token === null ? (
                  <Register />
                ) : (
                  <Redirect to="/" />
                )}
              </Route>
              <Route path={"/login"}>
                {currentUser.token === null ? <Login /> : <Redirect to="/" />}
              </Route>
              <Route path={"/chat"}>
                {currentUser.token === null ? (
                  <Login />
                ) : (
                  <Chat currentUser={currentUser} />
                )}
              </Route>
              <Route path={"/profile/:username"}>
                <Profile />
              </Route>
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </MessageContextProvider>
      </ConversationContextProvider>
    </AuthContextProvider>
  );
}

export default App;
