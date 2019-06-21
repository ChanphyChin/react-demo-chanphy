import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTest } from '../../store/actions';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
import { Layout, Button } from 'antd';
const { Content } = Layout;

export class StoreComponent extends Component {
  add = () => {
    console.log(this.props.test);
    let test = this.props.test;
    this.props.add(test / 1 + 1);
  };
  render() {
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
            <div>test in redux is {this.props.test}</div>
            <div>
              {this.props.sagaTest.map(item => {
                return item.name;
              })}
            </div>
            <Button onClick={this.add}>add test</Button>
          </div>
        </Content>
      </Layout>
    );
  }
}
let mapStateToProps = (state, ownProps = {}) => {
  console.log(state);
  return {
    test: state.test,
    sagaTest: state.sagaTest
  };
};
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: test => {
      dispatch(addTest(test));
    }
  };
};
export let Store = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreComponent);
