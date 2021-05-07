import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import Machines from "../pages/Machines";
import SignUp from "../pages/SignUp";
import Route from "./Routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/register/users" component={SignUp} />

        <Sidebar>
          <Route exact path="/dashboard" component={Dashboard} isPrivate />
          <Route exact path="/machines" component={Machines} isPrivate />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default Routes;
