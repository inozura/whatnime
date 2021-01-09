import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import NotFound from "./pages/404";
// import Detail from "./pages/Detail";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const Detail = React.lazy(() => import("./pages/Detail"));

export default function router(props) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        {props.children}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/policy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/about" component={About} />
          <Route path="/detail/:idmal/:idanilist" render={() => <Detail />} />
          <Route path="/detail">
            <Redirect to="/" />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}
