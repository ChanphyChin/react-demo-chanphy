import React, { Component } from 'react';
import { Button } from 'antd';

export class PageNotFound extends Component {
  render() {
    return (
      <div>
        Page not found
        <div>
          <Button onClick={() => this.props.history.push('/home')}>
            回首页逛逛
          </Button>
        </div>
      </div>
    );
  }
}
