import React from 'react';
import { Row, Col } from 'antd';
import { text } from '../../../../styles';

const Billing = ({ billing }) => {
  return (
    <>
      <h3>Billing info</h3>
      <Row>
        <Col span={12}>
          <div>Payment Method</div>
        </Col>
        <Col>
          <div style={text.strong}>{billing}</div>
        </Col>
      </Row>
    </>
  );
};

export default Billing;
