import React, { Component } from 'react';
import { BreadCrumbs } from '../components/common/bread-crumbs';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

export class Test extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadCrumbs breadCrumbList={['home', 'test']} />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          test
        </Content>
      </Layout>
    );
  }
}
