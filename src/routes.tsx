import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Create } from "./pages/Create";
import { SignIn } from "./pages/SignIn";
import { SimplePage } from './pages/SimplePage';

function Routes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/create" component={Create} />
          <Route path="/simple" component={SimplePage} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Routes;
