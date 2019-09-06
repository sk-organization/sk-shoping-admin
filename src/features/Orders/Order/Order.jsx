import React from 'react';
import { Row, Col, Icon, Table, Spin } from 'antd';
import { query } from '../graphql';
import Customer from './BasicInfo/Customer';
import { useData } from '../../hooks';
import Shipping from './BasicInfo/Shipping';
import Billing from './BasicInfo/Billing';
import { orderProduct } from './config';
import { align } from '../../../styles';

const OrderInfo = props => {
  const { id } = props;

  const [loading, error, order = {}] = useData({
    gql: query.order,
    variables: { id },
    result: 'order',
  });

  if (error) {
    return <h1>Error........</h1>;
  }

  const productsMapped =
    order.products &&
    order.products.map((orderProduct, index) => {
      const { selectedVariations } = orderProduct;
      const { quantity } = selectedVariations.reduce(
        (acc, a) => ({
          quantity:
            acc.quantity +
            a.sizes.reduce(
              (acc, size) => ({ quantity: size.quantity + acc.quantity }),
              {
                quantity: 0,
              },
            ).quantity,
        }),
        { quantity: 0, sizes: [] },
      );

      const getPrice = (price, discountPercent) => {
        if (discountPercent === 0) return price;
        return price * (1 - discountPercent / 100);
      };

      return {
        ...orderProduct,
        sn: index + 1,
        quantity,
        image: orderProduct.product.variations[0].images[0],
        subTotal: getPrice(
          orderProduct.total,
          orderProduct.product.discountPercent,
        ),
        info: {
          subCategory: orderProduct.product.subCategory.name,
          shopName: orderProduct.product.seller.shopName,
          name: orderProduct.product.name,
          discountPercent: orderProduct.product.discountPercent,
          price: orderProduct.product.price,
        },
      };
    });

  return (
    <Spin spinning={loading}>
      <div>
        <Row span={10}>
          <Col span={18}>
            <h3>
              Order Id: <strong>{order.id}</strong>{' '}
            </h3>
          </Col>
          <Col span={6}>
            <Icon
              style={{ fontSize: '35px', textAlign: 'center' }}
              type="printer"
            />
          </Col>
        </Row>
        <hr />
      </div>
      <Row>
        <Col span={8}>
          <Customer customer={order.orderBy} />
        </Col>
        <Col span={8}>
          <Shipping shipping={order.shippingAddress} />
        </Col>
        <Col span={8}>
          <Billing billing={order.paymentMethod} />
        </Col>
      </Row>
      <br />
      <br />
      <Table
        loading={loading}
        dataSource={productsMapped}
        columns={orderProduct}
        pagination={false}
      />
      <Row>
        <Col span={12} />
        <Col span={12} style={{ ...align.right, fontSize: 17, marginTop: 30 }}>
          <div>
            Grand Total: <strong>₹ {order.total}</strong>
          </div>
        </Col>
      </Row>
    </Spin>
  );
};

export default OrderInfo;
