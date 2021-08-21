import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Proposals } from "./pages/Proposals";
import { NewProposal } from "./pages/Proposals/new";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/propostas" exact component={Proposals} />
        <Route path="/propostas/nova" exact component={NewProposal} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
