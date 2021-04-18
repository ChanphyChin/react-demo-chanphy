import React, { Component } from 'react';
import { Layout } from 'antd';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
const { Content } = Layout;

export class UserSetting extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <BreadCrumbs breadCrumbList={['User Center', 'Setting']} />
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          setting
        </div>
      </Content>
    );
  }
}
