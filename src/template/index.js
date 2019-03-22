import React, { createContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import useGlobalMessage from 'use/useGlobalMessage';
import Public from './Public';

export const PublicContext = createContext({});

export default function Template() {
  const {
    globalMsg,
    addGlobalMsg,
    delGlobalMsg
  } = useGlobalMessage();

  return (<PublicContext.Provider
      value={{globalMsg, addGlobalMsg, delGlobalMsg}}
    >
    <HashRouter>
      <Switch>
        <Routes />
      </Switch>
    </HashRouter>
  </PublicContext.Provider>);
}

const Routes = () => {
  return routes.map((route, index) => {
    const { Component, path } = route;
    return (
      <Route
        exact
        path={path}
        key={index}
        render={ (route) => <Public
          Component={Component}
          route={route}
        /> }
      />
    );
  });
};