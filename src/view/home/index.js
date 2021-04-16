import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavMenu } from '../..//components/common/nav-menu';
import { SiderMenu } from '../../components/common/sider-menu';
import routes from '../../router';

export class Home extends Component {
  state = {
    navList: [
      { path: '/home', name: 'home' },
      { path: '/activity', name: 'activity' }
    ],
    siderList: [
      {
        group: 'subnav 1',
        key: 'sub1',
        icon: 'user',
        children: [
          {
            name: 'dashboard',
            path: '/home/dashboard'
          },
          {
            name: 'store',
            path: '/home/store'
          },
          {
            name: 'hooks',
            path: '/home/hooks'
          }
        ]
      }
    ]
  };
  render() {
    const routesConfig = routes.find(item => item.name === 'home');
    return (
      <Layout>
        <NavMenu navList={this.state.navList} />
        <Layout>
          <SiderMenu siderList={this.state.siderList} />
          {/*子路由的定义 react-router-dom 把父子组件的嵌套更改成在父组件里面进行管理*/}
          <Switch>
            {routesConfig.children.map(item => {
              return (
                <Route
                  exact
                  path={item.path}
                  component={item.component}
                  key={item.path}
                />
              );
            })}
            <Redirect from="*" to="/home/dashboard" />
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export { Dashboard } from './dashboard';
export { Store } from './store';
export { Hooks } from './hooks';
