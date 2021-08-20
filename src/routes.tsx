import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Create } from "./pages/Create";
import { SignIn } from "./pages/SignIn";
import { Proposal } from "./pages/Proposal";
import { AuthContext } from "./context/AuthContext";

function Routes() {
  const { data } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/create" component={Create} />
        <Route path="/proposal" component={Proposal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
