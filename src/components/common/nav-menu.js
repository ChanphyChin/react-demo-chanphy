import React, { Component } from 'react';
import { Menu, Layout, Icon, Dropdown, Modal } from 'antd';
import { withRouter } from 'react-router-dom';
const { Header } = Layout;
const confirm = Modal.confirm;

class NavMenuComponent extends Component {
  state = {
    defaultSelectedKeysTop: ['/home'],
    defaultSelectedKeysSide: []
  };
  componentDidMount() {
    let pathname = this.props.location.pathname;
    let defaultSelectedKeysTop = [];
    for (let item of this.props.navList) {
      if (pathname.includes(item.name)) {
        defaultSelectedKeysTop.push(item.path);
      }
    }
    this.setState({
      defaultSelectedKeysTop
    });
  }
  menuChange = e => {
    // 组件内部路由跳转
    this.props.history.push(e.key);
  };
  handleMenuClick = e => {
    if (e.key === '/login') {
      confirm({
        title: 'Do you want to logout?',
        content: '',
        onOk: () => {
          this.props.history.push(e.key);
        },
        onCancel: () => {}
      });
    } else {
      this.props.history.push(e.key);
    }
  };
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="/userCenter/setting">
          <Icon type="setting" />
          User Center
        </Menu.Item>
        <Menu.Item key="/login">
          <Icon type="logout" />
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className="header" style={{ position: 'relative' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={this.state.defaultSelectedKeysTop}
          onSelect={this.menuChange.bind(this)}
          style={{ lineHeight: '64px' }}
        >
          {this.props.navList.map((item, index) => {
            return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
          })}
        </Menu>
        <div style={{ position: 'absolute', top: 0, right: 20 }}>
          <Dropdown overlay={menu}>
            <Icon type="user" style={{ color: '#fff', fontSize: 24 }} />
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export let NavMenu = withRouter(NavMenuComponent);
