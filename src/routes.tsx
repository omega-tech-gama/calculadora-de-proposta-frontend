import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Create } from "./pages/Create";
import { SignUp } from "./pages/SignUp";
import { Proposals } from "./pages/Proposals";

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" exact component={SignUp}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/propostas" exact component={Proposals}/>
      </BrowserRouter>
  );
}

export default Routes;