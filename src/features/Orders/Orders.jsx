import React from 'react';

import { Table } from 'antd';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { query } from './graphql';
import { ordersTable } from './config';
import client from '../../app/config/apollo';

const Orders = ({ where = {} }) => {
  console.log(where);
  const { data } = useQuery(query.orders, {
    variables: {
      where,
    },
    client,
    pollInterval: 500,
  });

  const { orders = [] } = data;

  const ordersMapped = orders.map((order, index) => {
    const { createdAt, orderBy } = order;
    const { name, image } = orderBy;

    let orderTotal = 0;
    let totalProducts = 0;
    order.products.forEach(product => {
      let totalQuantity = 0;
      totalProducts += 1;
      product.selectedVariations.forEach(selectedVariation => {
        selectedVariation.sizes.forEach(size => {
          totalQuantity += size.quantity;
        });
      });
      orderTotal += totalQuantity * product.product.price;
    });

    const addDays = (date, days) => {
      date.setDate(date.getDate() + days);
      return date;
    };

    return {
      ...order,
      sn: index + 1,
      actions: {
        id: order.id,
      },
      deliveryDate: addDays(new Date(order.createdAt), 7).toDateString(),
      image,
      totalProducts,
      customerName: name,
      orderDate: new Date(createdAt).toDateString(),
      orderTotal: `₹ ${orderTotal}`,
    };
  });

  return (
    <div>
      <h3>All Orders</h3>
      <Table
        onRowClick={order => navigate(`/order/${order.id}`)}
        key={order => order.id}
        dataSource={ordersMapped}
        columns={ordersTable}
      />
    </div>
  );
};

export default Orders;
