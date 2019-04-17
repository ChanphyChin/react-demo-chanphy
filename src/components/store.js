import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addTest } from '../store/actions';

export class StoreComponent extends Component {
  add = () => {
    console.log(this.props.test);
    let test = this.props.test;
    this.props.add(test/1 + 1);
  }
  render() {
    return(
      <div>
        <div>test in redux is {this.props.test}</div>
        <Button onClick={this.add}>add test</Button>
      </div>
    );
  }
}
let mapStateToProps = (state, ownProps = {}) => {
  console.log(state)
  return {
    test: state.test
  }
}
let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (test) => {
      dispatch(addTest(test));
    }
  }
}
export let Store = connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
