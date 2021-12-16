import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/404-page-not-found"
        exact
        render={() => <div>404 Page Not Found</div>}
      />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
