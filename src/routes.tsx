import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Create } from "./pages/Create";
import { SignIn } from "./pages/SignIn";

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" exact component={SignIn}/>
          <Route path="/create" component={Create}/>
      </BrowserRouter>
  );
}

export default Routes;