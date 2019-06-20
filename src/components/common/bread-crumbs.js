import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

export class BreadCrumbs extends Component {
  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {this.props.breadCrumbList.map((item, index) => {
          return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    );
  }
}
