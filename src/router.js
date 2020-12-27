import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import NotFound from "./pages/404";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default function router(props) {
  return (
    <div>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        {props.children}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/policy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
