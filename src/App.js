import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Test, Test1, Store } from './view/index';
import { NavMenu } from './components/common/nav-menu';

const { SubMenu } = Menu;
const { Sider } = Layout;

class App extends Component {
  state = {
    defaultSelectedKeysTop: ['1'],
    defaultSelectedKeysSide: []
  };
  menuChange = e => {
    // 组件内部路由跳转
    this.props.history.push(e.key);
  };
  componentWillMount() {
    let defaultSelectedKeysSide = [];
    // 通过this.props.location取到当前的router信息
    defaultSelectedKeysSide.push(this.props.location.pathname);
    this.setState({ defaultSelectedKeysSide });
  }
  render() {
    return (
      <Layout>
        <NavMenu navList={['nav1']} />
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={this.state.defaultSelectedKeysSide}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              onSelect={this.menuChange}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="/app/test">test</Menu.Item>
                <Menu.Item key="/app/test1">test1</Menu.Item>
                <Menu.Item key="/app/store">store</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
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
