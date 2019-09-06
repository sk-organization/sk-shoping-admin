import React from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import { navigate } from '@reach/router';
import axios from 'axios';

import { IMAGE_HOST, IMAGE_UPLOAD_HOST } from '../../app/config/constants';
import { margin } from '../../styles';

// TODO: Add New Column to products added this week for particular category
const categoriesTable = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <Avatar shape="square" size={100} src={IMAGE_HOST + image} />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },

  {
    title: 'Total Products',
    dataIndex: 'totalProducts',
  },

  {
    dataIndex: 'quickActions',
    title: 'Quick Action',
    render: quickActions => {
      const changeImage = async event => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('name', quickActions.label);
        formData.append('path', '/categories');
        formData.append('image', image);
        try {
          await axios.post(`${IMAGE_UPLOAD_HOST}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
            },
          });
          window.location.reload();
        } catch (error) {}
      };

      const menu = (
        <Menu>
          <Menu.Item onClick={() => navigate('/products/add-product')}>
            <Icon type="plus" /> Add Product For This Category
          </Menu.Item>
          <Menu.Item
            onClick={() =>
              navigate(
                `/categories/add-subCategories?key=${quickActions.key}&label=${
                  quickActions.label
                }`,
              )
            }
          >
            <Icon type="pause-circle" />
            Add SubCategories For This Category
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <label htmlFor="categoryImage">
              <Icon type="file-image" style={margin.mr5} />
              Change Image
            </label>
            <input
              style={{ display: 'none' }}
              onChange={changeImage}
              id="categoryImage"
              type="file"
              accept="image/*"
              multiple={false}
            />
          </Menu.Item>
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

export { categoriesTable };
