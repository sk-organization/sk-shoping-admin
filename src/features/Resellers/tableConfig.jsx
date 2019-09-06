import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from '../../app/config/constants';

export const resellersColumns = [
  {
    title: 'Image',
    dataIndex: 'user.image',
    key: 'image',
    render: image => <Avatar src={IMAGE_HOST + image} />,
  },
  {
    title: 'Name',
    dataIndex: 'user.name',
    key: 'name',
  },
  {
    title: 'Phone',
    dataIndex: 'user.phone',
    key: 'phone',
  },
  {
    title: 'Location',
    dataIndex: 'user.location.city',
    key: 'location',
  },
  {
    title: 'Address',
    dataIndex: 'user.location.address1',
    key: 'shopName',
  },
];

export const resellerColumns = [
  {
    title: 'Image',
    dataIndex: 'node.product.image',
    key: 'image',
    render: image => <Avatar src={IMAGE_HOST + image} />,
  },
  {
    title: 'Name',
    dataIndex: 'node.product.name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'node.product.price.sellingPrice',
    key: 'Price',
  },
  {
    title: 'Category',
    dataIndex: 'node.product.category.name',
    key: 'phone',
  },
  {
    title: 'Margin Gain',
    dataIndex: 'node.margin',
    key: 'margin',
  },
  {
    title: 'Seller',
    dataIndex: 'node.seller.user.name',
    key: 'sellerName',
  },
  {
    title: 'Sold Date',
    dataIndex: 'node.soldDate',
    key: 'soldDate',
    render: soldDate => new Date(soldDate).toDateString(),
  },
];
