import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export class RouterGuarder extends Component {
  getCurrentRoute = (routes, pathname) => {
    let currentRoute;
    for (let item of routes) {
      if (item.path === pathname) {
        currentRoute = item;
        break;
      }
      if (item.children) {
        const currentRouteInChildren = this.getCurrentRoute(
          item.children,
          pathname
        );
        currentRouteInChildren && (currentRoute = currentRouteInChildren);
      }
    }
    return currentRoute;
  };
  getAuthRoutes = routes => {
    const result = routes.reduce((result, item) => {
      if (item.auth) {
        result.push(item);
      }
      return result;
    }, []);
    return result;
  };
  render() {
    const {
      config,
      location: { pathname }
    } = this.props;
    const isLogin = sessionStorage.getItem('isLogin');
    const authRoutes = this.getAuthRoutes(config);
    const currentRoute = this.getCurrentRoute(config, pathname);
    if (!currentRoute && pathname !== '/') {
      return <Redirect from="*" to="/404" />;
    }
    if (isLogin) {
      if (pathname === '/') {
        return <Redirect from="*" to="/home" />;
      }
      return authRoutes.map(item => {
        return (
          <Route key={item.path} path={item.path} component={item.component} />
        );
      });
    } else {
      return <Redirect from="*" to="/login" />;
    }
  }
}
