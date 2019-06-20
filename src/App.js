import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Test, Test1, Store } from './view/index';
import { NavMenu } from './components/common/nav-menu';
import { SiderMenu } from './components/common/sider-menu';

class App extends Component {
  render() {
    return (
      <Layout>
        <NavMenu navList={['nav1']} />
        <Layout>
          <SiderMenu />
          {/*子路由的定义 react-router-dom 把父子组件的嵌套更改成在父组件里面进行管理*/}
          <Switch>
            <Route exact path="/app/test" component={Test} />
            <Route exact path="/app/test1" component={Test1} />
            <Route exact path="/app/store" component={Store} />
            <Redirect from="*" to="/app/test" />
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export default App;
