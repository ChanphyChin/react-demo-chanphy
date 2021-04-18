import React, { Component } from 'react';
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
    return (
      <Layout>
        <NavMenu navList={this.state.navList} />
        <Layout>
          {/*子路由的定义 react-router-dom 把父子组件的嵌套更改成在父组件里面进行管理*/}
          this is user center
        </Layout>
      </Layout>
    );
  }
}

export { UserSetting } from './setting';
