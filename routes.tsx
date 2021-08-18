import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Create } from "./src/pages/Create";
import { SignUp } from "./src/pages/SignUp";

function Routes(){
  return (
      <BrowserRouter>
          <Route path="/" exact component={SignUp}/>
          <Route path="/create" component={Create}/>
      </BrowserRouter>
  );
}

export default Routes;