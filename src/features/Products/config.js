import React from 'react';
import { Avatar, Menu, Dropdown, Icon, Tag } from 'antd';
import { navigate } from '@reach/router';
import client from '../../app/config/apollo';
import { IMAGE_HOST } from '../../app/config/constants';
import gql from 'graphql-tag';

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
        <strong style={{ color: 'Purple', fontSize: 18 }}>
          Product Details
        </strong>
        <div>
          Product Name:
          <strong>{meta.name}</strong>
        </div>
        <div>
          Product Category:
          <strong>{meta.category.replace('-', ' ')}</strong>
        </div>

        <div>
          Actual Price:
          <strong>{meta.price}</strong>
        </div>

        <div>
          Marked Price:
          <strong>
            {meta.discountPercent > 0
              ? meta.price + meta.price * (meta.discountPercent / 100)
              : meta.price}
          </strong>
        </div>

        <div>
          Viewed:
          <strong>{meta.viewed}</strong>
        </div>
        <div>
          Tags:{' '}
          {meta.tags.map(tag => (
            <Tag color="purple">{tag.name}</Tag>
          ))}
        </div>
        <br />
        <div>
          <strong style={{ color: 'Green', fontSize: 18 }}>
            Seller&rsquo;s Details
          </strong>
          <div>
            Shop Name: <strong>{meta.sellerShopName}</strong>
          </div>
          <div>
            Seller Name: <strong>{meta.seller}</strong>
          </div>
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
    dataIndex: 'quickActions',
    render: quickActions => {
      const menu = (
        <Menu>
          <Menu.Item
            key="1"
            onClick={() => navigate(`/product/${quickActions.id}`)}
          >
            <Icon type="eye" />
            View Product
          </Menu.Item>
          {quickActions.isApproved === false && (
            <Menu.Item
              key="2"
              onClick={() => {
                client
                  .mutate({
                    mutation: gql`
                      mutation($id: ID!) {
                        updateProduct(
                          data: { isApproved: true }
                          where: { id: $id }
                        ) {
                          id
                        }
                      }
                    `,
                    variables: {
                      id: quickActions.id,
                    },
                  })
                  .then(() => {
                    // console.log('done');
                    navigate('/products');
                  })
                  .catch(error => {
                    console.error(error);
                  });
              }}
            >
              <Icon type="check" /> Approved Products
            </Menu.Item>
          )}

          <Menu.Item
            key="3"
            onClick={() => navigate(`/edit-product/${quickActions.id}`)}
          >
            <Icon type="edit" /> Edit Product
          </Menu.Item>
          <Menu.Item key="4">
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
