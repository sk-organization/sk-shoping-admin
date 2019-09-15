import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';

const Sales = () => {
  const [loading, setLoading] = useState(false);
  const [sales, setSales] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setSales({
        orders: '532',
        products: '5000',
        subTotal: '12,50,430',
        discount: '11,500',
        total: '22,80,780',
      });
      setLoading(false);
    }, 3000);
  }, []);

  const { orders, products, subTotal, discount, total } = sales;

  return (
    <Card.Group loading={loading}>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="small"
            centered
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          <br />
        </Card.Content>
        <div>
          Orders: <span>{orders}</span> <br />
          Products: <span>{products}</span> <br />
          SubTotal: <span>{subTotal}</span> <br />
          Discount: <span>{discount}</span> <br />
          Total: <span>{total}</span>
        </div>
      </Card>
    </Card.Group>
  );
};

export default Sales;
