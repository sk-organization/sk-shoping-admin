import React from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import axios from 'axios';

import { IMAGE_HOST, IMAGE_UPLOAD_HOST } from '../../../app/config/constants';
import { margin } from '../../../styles';

const subCategoriesTable = [
  {
    title: 'Image',
    dataIndex: 'image',
    width: '220px',
    render: image => (
      <Avatar shape="square" size={100} src={IMAGE_HOST + image} />
    ),
  },
  {
    title: 'SubCategory',
    dataIndex: 'name',
  },

  {
    title: 'Category',
    dataIndex: 'category.name',
  },

  {
    title: 'Total Products',
    dataIndex: 'totalProducts',
  },

  {
    title: 'Quick Action',
    render: quickActions => {
      const changeImage = async event => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('name', quickActions.name);
        formData.append('path', '/sub-categories');
        formData.append('image', image);
        try {
          await axios.post(`${IMAGE_UPLOAD_HOST}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
            },
          });
          // TODO: don't reload whole page
          window.location.reload();
        } catch (error) {}
      };
      const menu = (
        <Menu>
          <Menu.Item key="0">
            <Icon type="plus" /> Add Product For This Sub Category
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

export { subCategoriesTable };
