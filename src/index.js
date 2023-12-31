import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import AdminLogin from "layouts/AdminLogin.js";
import UserLogin from "views/UserLogin.js";
import Register from "layouts/Register.js";
import PrimeiroAcesso from "views/PrimeiroAcesso";

const root = ReactDOM.createRoot(document.getElementById("root"));

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

root.render(
  <BrowserRouter>
  
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/UserLogin" />} />
        <Route path="/admin" render={(props) => isAuthenticated() ? <AdminLayout {...props} /> : <Redirect to="/login" />} />
        <Route path="/Painel" render={(props) => <AdminLogin {...props} />} />
        <Route path="/PrimeiroAcesso" render={(props) => <PrimeiroAcesso {...props} />} />
        <Route path="/usuario" render={(props) => isAuthenticated() ? <AdminLayout {...props} /> : <Redirect to="/UserLogin" />} />
        <Route path="/Login" render={(props) => <UserLogin {...props} />} />
        <Redirect from="/" to="/Login" />
    </Switch>
  </BrowserRouter>
);



<script async src="//static.zotabox.com/4/d/4da5e12916aa183ffd04f337867909d9/widgets.js"></script>
