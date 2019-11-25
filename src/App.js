import React from "react";
import { Router, Link, Route } from "./route/router";
import { routes } from "./routes";
import "./App.css";

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link to={routes.home.path}>Back to home</Link>
    </div>
  );
}
function App() {
  return (
    <Router routes={routes} NotFound={NotFound}>
      <Route path={routes.home.path}>
        <h1>Home</h1>
        <Link to={routes.about.path}>Go to About</Link>
        <Link to={routes.contact.path}>Go to Contact</Link>
        <Link to="/unknown">Go to Unknown route(404)</Link>
      </Route>
      <Route path={routes.about.path}>
        <h1>About Router with ContextAPI and hooks</h1>
        <Link to={routes.home.path}>Go to home</Link>
        <Link to={routes.contact.path}>Go to Contact</Link>
      </Route>
      <Route path={routes.contact.path}>
        <h1>Contact : Router Inc.</h1>
        <Link to={routes.home.path}>Go to home</Link>
        <Link to={routes.about.path}>Go to About</Link>
      </Route>
    </Router>
  );
}

export default App;
