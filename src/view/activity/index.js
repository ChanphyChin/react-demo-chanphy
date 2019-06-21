import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavMenu } from '../..//components/common/nav-menu';
import routes from '../../router';
import { SiderMenu } from '../../components/common/sider-menu';

export class Activity extends Component {
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
            name: 'running',
            path: '/activity/running'
          }
        ]
      }
    ]
  };
  render() {
    return (
      <Layout>
        <NavMenu
          navList={[
            { path: '/home', name: 'home' },
            { path: '/activity', name: 'activity' }
          ]}
        />
        <Layout>
          <SiderMenu siderList={this.state.siderList} />
          {/*子路由的定义 react-router-dom 把父子组件的嵌套更改成在父组件里面进行管理*/}
          <Switch>
            {routes.activity.children.map(item => {
              return (
                <Route
                  exact
                  path={item.path}
                  component={item.component}
                  key={item.path}
                />
              );
            })}
            <Redirect from="*" to="/activity/running" />
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export { Running } from './running';
