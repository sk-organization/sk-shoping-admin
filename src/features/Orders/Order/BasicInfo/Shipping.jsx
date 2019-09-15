import React from 'react';
import { Row, Col } from 'antd';
import { text } from '../../../../styles';

const Shipping = ({ shipping = {} }) => {
  return (
    <>
      <h3>Shipping info</h3>
      <Row>
        <Col span={6}>
          {shipping.city && <div>City:</div>}
          {shipping.address1 && <div>Address1</div>}
          {shipping.address2 && <div>Address2</div>}
          {shipping.zipCode && <div>ZipCode</div>}
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
