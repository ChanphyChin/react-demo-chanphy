import React, { Component } from 'react';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import { SOME_THING_FORM_AJAX_PARAMS } from '../../store/action-types';
import { getLang } from '../../language/get-lang';

const { Content } = Layout;

class Page extends Component {
  render() {
    const language = getLang();
    const { setAjaxParams, ajaxData } = this.props;
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
          <Button onClick={() => setAjaxParams({ id: 1 })}>
            {language.home.dashboard.getData}
          </Button>
          <div>data is {JSON.stringify(ajaxData)}</div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ajaxData: state.ajaxData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAjaxParams: ajaxParams => {
      dispatch({ type: SOME_THING_FORM_AJAX_PARAMS, ajaxParams });
    }
  };
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Page);
