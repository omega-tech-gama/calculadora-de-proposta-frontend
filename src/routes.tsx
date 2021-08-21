import { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Proposals } from "./pages/Proposals";
import { AuthContext } from "./context/AuthContext";

function Routes() {
  const { data } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/propostas" component={Proposals} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
