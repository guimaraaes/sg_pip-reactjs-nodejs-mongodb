import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import NewProcess from "../views/NewProcess";
import OldProcess from "../views/OldProcess";
import Process from "../views/Process";
import StudentRequest from "../views/StudentRequest";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-process" exact component={NewProcess} />
        <Route path="/process/:_id" exact component={Process} />
        <Route path="/old-process" exact component={OldProcess} />
        <Route
          path="/student-request/:id_process/:_id"
          exact
          component={StudentRequest}
        />
      </Switch>
    </BrowserRouter>
  );
}
