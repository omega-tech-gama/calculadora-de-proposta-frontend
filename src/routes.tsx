import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Create } from "./pages/Create";
import { Proposals } from "./pages/Proposals";
import { SignIn } from "./pages/SignIn";

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" exact component={SignIn}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/propostas" exact component={Proposals}/>
      </BrowserRouter>
  );
}

export default Routes;