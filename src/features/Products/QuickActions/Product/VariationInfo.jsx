import React from 'react';
import { Row, Col } from 'antd';

const VariationInfo = ({ variations }) => {
  const variationsList = variations.map(variation => {
    const { id, color, sizes } = variation;

    const sizesList = sizes.map(size => {
      const { id, name, quantity } = size;
      return (
        <div key={id}>
          Size: {name}, ({quantity})
        </div>
      );
    });

    return (
      <Col
        key={id}
        span={6}
        style={{
          border: '2px solid green',
          padding: '5px',
          marginBottom: 5,
          marginRight: 5,
        }}
      >
        <div>
          Color: <strong>{color}</strong>
          {sizesList}
        </div>
      </Col>
    );
  });

  return (
    <div>
      <h3>Variations</h3>
      <Row>{variationsList}</Row>
    </div>
  );
};

export default VariationInfo;
