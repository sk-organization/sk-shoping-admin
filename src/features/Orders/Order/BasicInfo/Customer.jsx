import React from 'react';
import { Col, Row } from 'antd';
import { text } from '../../../../styles';

const Customer = ({ customer = {} }) => {
  return (
    <>
      <h3>Customer Info</h3>
      <Row>
        <Col span={6}>
          {customer.name && <div>Name</div>}
          {customer.email && <div>Email</div>}
          {customer.phone && <div>Phone</div>}
          {customer.gender && <div>Gender</div>}
        </Col>
        <Col>
          <div style={text.strong}>{customer.name}</div>
          <div style={text.strong}>{customer.email}</div>
          <div style={text.strong}>{customer.phone}</div>
          <div style={text.strong}>{customer.gender}</div>
        </Col>
      </Row>
      {/* <div style={text.strong}>{customer.skMoney}</div> */}
    </>
  );
};

export default Customer;
