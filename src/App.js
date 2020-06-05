import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./containers/Store";
import Payment from "./containers/Payment";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Store}></Route>
        <Route path="/shopping-cart-detail" exact component={Payment}></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
