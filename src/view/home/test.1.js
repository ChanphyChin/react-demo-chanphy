import React, { Component } from 'react';
import { Layout } from 'antd';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
const { Content } = Layout;

export class Test1 extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadCrumbs breadCrumbList={['Home', 'Test1']} />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          test1
        </Content>
      </Layout>
    );
  }
}
