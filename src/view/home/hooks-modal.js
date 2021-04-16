import React, { useEffect } from 'react';
import { Modal } from 'antd';

export const HooksModal = props => {
  useEffect(() => {
    console.log('modal useEffect');
  });
  return (
    <Modal
      visible={props.visiable}
      onOk={() => props.onModalSumit()}
      onCancel={() => props.onHideModal()}
    >
      {props.content}
    </Modal>
  );
};
