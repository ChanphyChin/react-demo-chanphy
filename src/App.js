import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Test, Test1, Store } from './components/index'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    defaultSelectedKeysTop: ['1'],
    defaultSelectedKeysSide: []
  }
  menuChange = (e) => {
    // 组件内部路由跳转
    this.props.history.push(e.key);
  }
  componentWillMount() {
    let defaultSelectedKeysSide = [];
    // 通过this.props.location取到当前的router信息
    defaultSelectedKeysSide.push(this.props.location.pathname);
    this.setState({ defaultSelectedKeysSide });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={this.state.defaultSelectedKeysTop}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={this.state.defaultSelectedKeysSide}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              onSelect={this.menuChange}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="/app/test">test</Menu.Item>
                <Menu.Item key="/app/test1">test1</Menu.Item>
                <Menu.Item key="/app/store">store</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
            {/*子路由的定义 react-router-dom 把父子组件的嵌套更改成在父组件里面进行管理*/}
              <Switch>
                <Route exact path="/app/test" component={Test} />
                <Route exact path="/app/test1" component={Test1} />
                <Route exact path="/app/store" component={Store} />
                // 路由重定向
                <Redirect from="*" to="/app/test" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
