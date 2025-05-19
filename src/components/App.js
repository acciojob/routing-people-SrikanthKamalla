import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
