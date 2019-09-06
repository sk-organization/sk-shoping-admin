import React from 'react';
import { Row, Col } from 'antd';
import { text } from '../../../../styles';

const Shipping = ({ shipping = {} }) => {
  return (
    <>
      <h3>Shipping info</h3>
      <Row>
        <Col span={6}>
          <div>City:</div>
          <div>Address1:</div>
          <div>Address2:</div>
          <div>ZipCode:</div>
        </Col>
        <Col>
          <div style={text.strong}>{shipping.city}</div>
          <div style={text.strong}>{shipping.address1}</div>
          <div style={text.strong}>{shipping.address2}</div>
          <div style={text.strong}>{shipping.zipCode}</div>
        </Col>
      </Row>
    </>
  );
};

export default Shipping;
