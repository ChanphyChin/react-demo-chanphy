import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import routes from '../../router';
import { Layout } from 'antd';
import { NavMenu } from '../..//components/common/nav-menu';

export class UserCenter extends Component {
  state = {
    navList: [
      { path: '/home', name: 'home' },
      { path: '/activity', name: 'activity' }
    ]
  };
  render() {
    const routesConfig = routes.find(item => item.name === 'userCenter');
    return (
      <Layout>
        <NavMenu navList={this.state.navList} />
        <Layout>
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
            <Redirect from="*" to="/userCenter/setting" />
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export { UserSetting } from './setting';
