import React, { Component } from 'react';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
import { Layout } from 'antd';
const { Content } = Layout;

export class Dashboard extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadCrumbs breadCrumbList={['Home', 'Dashboard']} />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          dashboard
        </Content>
      </Layout>
    );
  }
}
