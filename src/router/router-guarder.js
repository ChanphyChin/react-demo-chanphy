import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PageNotFound } from '../view/page-not-found';

export class RouterGuarder extends Component {
  getCurrentRoute = (routes, pathname) => {
    for (let item of routes) {
      if (item.path === pathname) {
        return item;
      }
      if (item.children) {
        return this.getCurrentRoute(item.children, pathname);
      }
    }
  };
  getAuthRoutes = routes => {
    const result = routes.reduce((result, item) => {
      if (item.auth) {
        result.push(item);
      }
      if (item.children) {
        result.push(this.getAuthRoutes(item.children));
      }
      return result;
    }, []);
    return result;
  };
  render() {
    console.log(this.props);
    const {
      config,
      location: { pathname }
    } = this.props;
    const isLogin = true;
    const currentRoute = this.getCurrentRoute(config, pathname);
    console.log(currentRoute);
    if (!currentRoute) {
      return <Route path="/404" component={PageNotFound} />;
    }
    if (isLogin) {
      return (
        <Route path={currentRoute.path} component={currentRoute.component} />
      );
    }
    return null;
  }
}
