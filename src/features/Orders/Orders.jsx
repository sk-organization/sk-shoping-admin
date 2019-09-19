import React from 'react';
import { Table } from 'antd';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { query } from './graphql';
import { ordersTable } from './config';
import client from '../../app/config/apollo';

const Orders = ({ where = {} }) => {
  const { data = {}, error, loading } = useQuery(query.orders, {
    variables: {
      where,
    },
    client,
    pollInterval: 500,
  });

  if (error) return <div>Server Error...</div>;

  const { orders = [] } = data;

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
      deliveryDate: addDays(new Date(order.createdAt), 6).toDateString(),
      image,
      customerName: name,
      orderDate: new Date(createdAt).toDateString(),
    };
  });

  return (
    <div>
      <Table
        loading={loading}
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
