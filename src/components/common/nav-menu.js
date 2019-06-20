import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
const { Header } = Layout;

export class NavMenu extends Component {
  state = {
    defaultSelectedKeysTop: ['1'],
    defaultSelectedKeysSide: []
  };
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={this.state.defaultSelectedKeysTop}
          style={{ lineHeight: '64px' }}
        >
          {this.props.navList.map((item, index) => {
            return <Menu.Item key={index + 1}>{item}</Menu.Item>;
          })}
        </Menu>
      </Header>
    );
  }
}
