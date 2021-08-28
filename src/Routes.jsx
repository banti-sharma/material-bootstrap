import React, { lazy, Suspense } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import menus from "./menu";

const loadingStyle = { top: "50%", left: "50%", position: "fixed" };

export default (props) => (
  <HashRouter>
    <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
      <Switch>
        {menus.map((menu) => (
          <Route key={menu.pathname} exact path={menu.pathname} component={lazy(menu.component)} />
        ))}
      </Switch>
    </Suspense>
  </HashRouter>
);
