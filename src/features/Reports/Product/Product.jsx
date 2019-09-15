import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Product = () => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="small"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default Product;
