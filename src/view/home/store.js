import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onButtonClick } from '../../store/actions';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
import { Layout, Button } from 'antd';
const { Content } = Layout;

export class StoreComponent extends Component {
  add = () => {
    console.log(this.props.count);
    let count = this.props.count;
    this.props.add(count / 1 + 1);
  };
  render() {
    const { count } = this.props;
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadCrumbs breadCrumbList={['Home', 'Store']} />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <div>
            <div>button click count in redux is {count}</div>
            <Button onClick={this.add}>add count</Button>
          </div>
        </Content>
      </Layout>
    );
  }
}
let mapStateToProps = (state, ownProps = {}) => {
  console.log(state);
  return {
    count: state.count,
    ajaxData: state.ajaxData
  };
};
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: count => {
      dispatch(onButtonClick(count));
    }
  };
};
export let Store = connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
