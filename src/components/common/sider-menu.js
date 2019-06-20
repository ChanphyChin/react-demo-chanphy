import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;
export class SiderMenuComponent extends Component {
  state = {
    defaultSelectedKeysTop: ['1'],
    defaultSelectedKeysSide: ['/app/test']
  };
  menuChange = e => {
    console.log(this);
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
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={this.state.defaultSelectedKeysSide}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={this.menuChange.bind(this)}
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
    );
  }
}

export let SiderMenu = withRouter(SiderMenuComponent);
