import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

const Entry = () => <App />;

export default Entry;
