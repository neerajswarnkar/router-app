import React from "react";
import { createBrowserHistory } from "history";
import { locationToRoute } from "../adapter/adapter";

export const history = createBrowserHistory();

export const RouterContext = React.createContext({
  route: locationToRoute(history.location)
});
