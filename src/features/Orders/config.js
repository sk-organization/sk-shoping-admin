import React from 'react';
import { Avatar, Tag } from 'antd';
import { IMAGE_HOST } from '../../app/config/constants';

const statusMapping = {
  PENDING: {
    color: 'orange',
    text: 'Pending',
  },
  CANCELLED: {
    color: 'red',
    text: 'Cancelled',
  },
  FAILED: {
    color: 'red',
    text: 'Failed',
  },
  RECEIVED: {
    color: '#87d068',
    text: 'Received',
  },
};

const ordersTable = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <Avatar shape="square" size={50} src={IMAGE_HOST + image} />
    ),
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    // sorter: true,
    width: '20%',
  },
  {
    title: 'Quantity',
    dataIndex: 'totalProducts',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Order Total',
    dataIndex: 'total',
    render: total => `₹ ${total}`,
  },
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
  },

  {
    title: 'Delivery Date',
    dataIndex: 'deliveryDate',
  },

  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'PENDING', value: 'PENDING' },
      { text: 'RECIEVED', value: 'RECEIVED' },
      { text: 'CANCELLED', value: 'CANCELLED' },
      { text: 'RETURNED', value: 'RETURNED' },
      { text: 'FAIL', value: 'FAILED' },
    ],
    filterMultiple: false,
    width: '15%',
    render: status => (
      <Tag color={statusMapping[status].color}>
        {statusMapping[status].text}
      </Tag>
    ),
  },
];

export { ordersTable };
