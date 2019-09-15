import React from 'react';
import { Avatar, Menu, Dropdown, Icon, Tag } from 'antd';
import { navigate } from '@reach/router';
import { IMAGE_HOST } from '../../app/config/constants';

const productsTable = [
  {
    title: 'Image',
    dataIndex: 'variations[0].images[0]',
    width: '180px',
    render: image => (
      <Avatar
        style={{ marginTop: 40, marginLeft: 20 }}
        shape="square"
        size={100}
        src={IMAGE_HOST + image}
      />
    ),
  },
  {
    title: 'Products',
    dataIndex: 'meta',
    width: '400px',
    render: meta => (
      <div>
        <h3 style={{ color: 'Purple' }}>Product Details</h3>
        Product Name:
        <strong>{meta.name}</strong>
        <br />
        Product Category:
        <strong>{meta.category.replace('-', ' ')}</strong>
        <br />
        Actual Price:
        <strong>{meta.price}</strong>
        <br />
        Marked Price:
        <strong>
          {meta.discountPercent > 0
            ? meta.price + meta.price * (meta.discountPercent / 100)
            : meta.price}
        </strong>
        <br />
        Viewed:
        <strong>{meta.viewed}</strong>
        <br />
        Tags:{' '}
        {meta.tags.map(tag => (
          <Tag color="purple">{tag.name}</Tag>
        ))}
        <br />
        <div>
          <h3 style={{ color: 'Green' }}>Seller&rsquo;s Details</h3>
          Shop Name: <strong>{meta.sellerShopName}</strong>
          <br />
          Seller Name: <strong>{meta.seller}</strong>
          {/* TODO: add tags */}
        </div>
      </div>
    ),
  },
  {
    title: 'Added/Last Modified Date',
    dataIndex: 'date',
    render: date => (
      <div>
        Added Date:
        <strong>{new Date(date.createdAt).toDateString()}</strong>
        <br />
        Modified Date:
        <strong>{new Date(date.updatedAt).toDateString()}</strong>
      </div>
    ),
  },
  {
    title: 'Quick Action',
    dataIndex: 'id',
    render: id => {
      const menu = (
        <Menu>
          <Menu.Item key="4" onClick={() => navigate(`/product/${id}`)}>
            <Icon type="eye" />
            View Product
          </Menu.Item>

          <Menu.Item key="0" onClick={() => navigate(`/edit-product/${id}`)}>
            <Icon type="edit" /> Edit Product
          </Menu.Item>

          <Menu.Item key="1">
            <Icon type="pause-circle" /> Make Unavailable
          </Menu.Item>
          <Menu.Divider />
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#no">
            Quick Actions
            <Icon type="down" />
          </a>
        </Dropdown>
      );
    },
  },
];

export { productsTable };
