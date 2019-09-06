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
  },
  {
    title: 'Total Products',
    dataIndex: 'totalProducts',
  },
  {
    title: 'Order Total',
    dataIndex: 'orderTotal',
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
    render: status => (
      <Tag color={statusMapping[status].color}>
        {statusMapping[status].text}
      </Tag>
    ),
  },
];

export { ordersTable };
