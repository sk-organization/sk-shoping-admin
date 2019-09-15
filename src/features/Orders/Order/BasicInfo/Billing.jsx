import React from 'react';
import { Row, Col } from 'antd';
import { text } from '../../../../styles';

const Billing = ({ billing, status }) => {
  return (
    <>
      <h3>Billing info</h3>
      <Row>
        <Col span={12}>
          {billing && <div>Payment Method</div>}
          {status && <div>Status</div>}
        </Col>
        <Col>
          <div style={text.strong}>{billing}</div>
          <div style={text.strong}>{status}</div>
        </Col>
      </Row>
    </>
  );
};

export default Billing;
