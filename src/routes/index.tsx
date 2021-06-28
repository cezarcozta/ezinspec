import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import Machines from "../pages/Machines";
import Details from "../pages/Machines/Details";
import RetrivievePassword from "../pages/RetrievePassword";
import InputCode from "../pages/RetrievePassword/components/InputCode";
import InputNewPassword from "../pages/RetrievePassword/components/InputNewPassword";
import Route from "./Routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route
          exact
          path="/retrieve-password/"
          component={RetrivievePassword}
        />
        <Route exact path="/retrieve-password/code" component={InputCode} />
        <Route
          exact
          path="/retrieve-password/new-password"
          component={InputNewPassword}
        />

        <Sidebar>
          <Route exact path="/dashboard" component={Dashboard} isPrivate />
          <Route exact path="/machines" component={Machines} isPrivate />
          <Route exact path="/machines/:id" component={Details} isPrivate />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default Routes;
