import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Proposals } from "./pages/Proposals";
import { Proposal } from "./pages/Proposal";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/propostas" component={Proposals} />
        <Route path="/proposta" component={Proposal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
