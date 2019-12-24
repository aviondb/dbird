import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Profile from "./pages/profile";
//import Home from "./pages/home";
//import Feed from "./pages/feed";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/setup" component={Profile} />
        {/* 
        <Route exact path="/:handle" component={Profile} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/feed" component={Feed} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
