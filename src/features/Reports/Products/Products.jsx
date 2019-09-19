import React from 'react';
import { Table } from 'antd';
import { productsPurchasedReport } from './config';

const dataSource = [
  {
    sn: '1',
    image: 'dsfsd',
    name: 'White Indo Western',
    date: '02-05-2019',
    price: '2400',
    qty: '2',
    total: '4800',
  },
  {
    sn: '2',
    image: 'dsfsd',
    name: 'Selfie Kurti',
    date: '09-05-2019',
    price: '850',
    qty: '2',
    total: '1700',
  },
  {
    sn: '3',
    image: 'dsfsd',
    name: 'Daisy Plazo Suit',
    date: '13-05-2019',
    price: '1850',
    qty: '2',
    total: '3700',
  },
];

const PorductsPurchasedReport = () => {
  return (
    <div>
      <h3>Product Purchsed Report</h3>
      <Table dataSource={dataSource} columns={productsPurchasedReport} />
    </div>
  );
};

export default PorductsPurchasedReport;
