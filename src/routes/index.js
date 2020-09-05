import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import NewProcess from "../views/NewProcess";
import Process from "../views/Process";
import OldProcess from "../views/OldProcess";
import StudentRequest from "../views/StudentRequest";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-process" exact component={NewProcess} />
        <Route path="/process" exact component={Process} />
        <Route path="/old-process" exact component={OldProcess} />
        <Route path="/student-request" exact component={StudentRequest} />
      </Switch>
    </BrowserRouter>
  );
}
