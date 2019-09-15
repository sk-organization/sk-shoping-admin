import React from 'react';
import { Table } from 'antd';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { query } from './graphql';
import { ordersTable } from './config';
import client from '../../app/config/apollo';

const Orders = ({ where = {} }) => {
  const { data } = useQuery(query.orders, {
    variables: {
      where,
    },
    client,
    pollInterval: 500,
  });

  const { orders = [] } = data;

  console.log(orders.map(order => order.totalProducts));

  const ordersMapped = orders.map((order, index) => {
    const { createdAt, orderBy } = order;
    const { name, image } = orderBy;

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
      customerName: name,
      orderDate: new Date(createdAt).toDateString(),
    };
  });

  return (
    <div>
      <Table
        onRowClick={order => navigate(`/order/${order.id}`)}
        key={order => order.id}
        dataSource={ordersMapped}
        columns={ordersTable}
        onChange={console.log('clicked')}
      />
    </div>
  );
};

export default Orders;
