import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import Machines from "../pages/Machines";
import Route from "./Routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />

        <Sidebar>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/machines" component={Machines} />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default Routes;
