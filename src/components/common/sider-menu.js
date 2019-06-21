import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;
export class SiderMenuComponent extends Component {
  state = {
    defaultSelectedKeysTop: ['1'],
    defaultSelectedKeysSide: ['/home/dashboard']
  };
  static getDerivedStateFromProps(props, state) {
    return {
      defaultSelectedKeysSide: [props.location.pathname]
    };
  }
  menuChange = e => {
    // 组件内部路由跳转
    this.props.history.push(e.key);
  };
  componentDidMount() {
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
          selectedKeys={this.state.defaultSelectedKeysSide}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          onSelect={this.menuChange.bind(this)}
        >
          {this.props.siderList &&
            this.props.siderList.map(item => {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <Icon type={item.icon} />
                      {item.group}
                    </span>
                  }
                >
                  {item.children.map(child => {
                    return <Menu.Item key={child.path}>{child.name}</Menu.Item>;
                  })}
                </SubMenu>
              );
            })}
        </Menu>
      </Sider>
    );
  }
}

export let SiderMenu = withRouter(SiderMenuComponent);
