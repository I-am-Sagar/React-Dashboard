import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import App from "./App.js";

import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import "./assets/css/index.css";
import "./assets/css/App.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/Sidebar.css";
import "./assets/css/CustomCard.css";
import "./assets/css/Notification.css";
import "./assets/css/User.css";

import "./assets/css/MediaQueries.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => <App {...props} />} />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
