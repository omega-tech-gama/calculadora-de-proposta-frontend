import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Create } from "./pages/Create";
import { SignUp } from "./pages/SignUp";

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" exact component={SignUp}/>
          <Route path="/create" component={Create}/>
      </BrowserRouter>
  );
}

export default Routes;