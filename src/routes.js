import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Repositories from "./pages/Repositories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Repositories} exact />
      </Switch>
    </BrowserRouter>
  );
}
