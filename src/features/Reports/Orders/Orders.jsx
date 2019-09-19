import React from 'react';
import { Table } from 'antd';
import { customersOrderReport } from './config';

const dataSource = [
  {
    sn: '1',
    name: 'Jessy Holmes',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '2',
    name: 'Mike Henry',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '3',
    name: 'john Doe',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
];

const Orders = () => {
  return (
    <div>
      <h3>Customers Order Report</h3>
      <Table dataSource={dataSource} columns={customersOrderReport} />
    </div>
  );
};

export default Orders;
