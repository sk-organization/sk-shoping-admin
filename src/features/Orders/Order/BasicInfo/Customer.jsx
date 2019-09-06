import React from 'react';
import { Row, Col } from 'antd';
import { text } from '../../../../styles';

const Customer = ({ customer = {} }) => {
  return (
    <>
      <h3>Customer Info</h3>
      <Row>
        <Col span={6}>
          <div>Name:</div>
          <div>Phone:</div>
          <div>Email:</div>
        </Col>
        <Col>
          <div style={text.strong}>{customer.name}</div>
          <div style={text.strong}>{customer.phone}</div>
          {customer.email && <div style={text.strong}>{customer.email}</div>}
        </Col>
      </Row>
    </>
  );
};

export default Customer;
