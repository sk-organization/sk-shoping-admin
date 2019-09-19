import React from 'react';
import { Row, Col, Icon, Table, Spin, Steps } from 'antd';
import { differenceInBusinessDays } from 'date-fns';
import { query } from '../graphql';
import Customer from './BasicInfo/Customer';
import { useData } from '../../hooks';
import Shipping from './BasicInfo/Shipping';
import Billing from './BasicInfo/Billing';
import { orderProduct } from './config';
import { align, margin } from '../../../styles';

const { Step } = Steps;

const OrderInfo = props => {
  const { id } = props;

  const [loading, error, order = {}] = useData({
    gql: query.order,
    variables: { id },
    result: 'order',
  });

  if (error) {
    return <h1>Error...</h1>;
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

  const printOrder = () => {
    window.print();
  };

  let step = 0;

  const difference = differenceInBusinessDays(
    new Date(order.createdAt),
    new Date(),
  );

  if (difference === -1) {
    step = 1;
  } else if (difference === -2) {
    step = 2;
  }

  if (order.status === 'RECEIVED') {
    step = 3;
  }
  console.log(order);
  return (
    <Spin spinning={loading}>
      <>
        <Row span={10}>
          <Col span={12}>
            <h3>
              Order ID# <strong>{order.id}</strong>{' '}
            </h3>
          </Col>
          <Col span={12}>
            <div
              style={{
                fontSize: 30,
                textAlign: 'right',
                boxSizing: 'border-box',
                cursor: 'pointer',
                fontWeight: '400',
              }}
            >
              <Icon onClick={printOrder} title="Print" type="printer" />
            </div>
          </Col>
        </Row>
        <hr />
      </>
      <Row style={margin.mb30}>
        <Col span={8}>
          <Customer customer={order.orderBy} />
        </Col>
        <Col span={8}>
          <Shipping shipping={order.shippingAddress} />
        </Col>
        <Col span={8}>
          <Billing billing={order.paymentMethod} status={order.status} />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <div className="progress">
        <Steps size="small" progressDot current={step}>
          <Step title="Order And Approved" description="Sun 17-Sep-2019" />
          <Step title="Packed" description="Sun 17-Sep-2019" />
          <Step title="Shipped" description="Tue 19-Sep-2019" />
          <Step
            title="Deliver"
            description="Expected by Wed, 21st-Sep-2019 shipment yet to be deliver"
          />
        </Steps>
      </div>
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
          <>
            Grand Total: <strong>₹ {order.total}</strong>
          </>
        </Col>
      </Row>
    </Spin>
  );
};

export default OrderInfo;
