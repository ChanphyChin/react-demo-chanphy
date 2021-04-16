import React, { useEffect, useState } from 'react';
import { Button, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { HooksModal } from './hooks-modal';
import { BreadCrumbs } from '../../components/common/bread-crumbs';
import { SOME_THING_FORM_AJAX_PARAMS } from '../../store/action-types';

const { Content } = Layout;

export const Hooks = () => {
  const [btnText, setBtnText] = useState('弹窗');
  const [modalVisiable, setModalVisiable] = useState(false);
  const ajaxData = useSelector(state => state.ajaxData);
  const dispatch = useDispatch();

  useEffect(() => {});

  const onDispatch = () => {
    dispatch({ type: SOME_THING_FORM_AJAX_PARAMS, ajaxParams: { id: 123 } });
  };

  const onShowModal = () => {
    setModalVisiable(true);
  };

  const onModalSumit = () => {
    setModalVisiable(false);
  };

  const onHideModal = () => {
    setModalVisiable(false);
  };

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <BreadCrumbs breadCrumbList={['Home', 'hooks']} />
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <Button type="primary" onClick={onShowModal}>
          {btnText}
        </Button>
        <div>
          <Button onClick={onDispatch}>get redux data</Button>
          <div>data is {JSON.stringify(ajaxData)}</div>
        </div>
        <HooksModal
          visiable={modalVisiable}
          onModalSumit={onModalSumit}
          onHideModal={onHideModal}
          content="this is modal content"
        />
      </Content>
    </Layout>
  );
};
