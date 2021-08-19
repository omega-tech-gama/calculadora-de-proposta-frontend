import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Create } from "./pages/Create";
import { SignIn } from "./pages/SignIn";

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/create" component={Create} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Routes;
