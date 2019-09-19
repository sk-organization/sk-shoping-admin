import React from 'react';
import { Menu, Icon, Dropdown, Tag } from 'antd';
import { navigate } from '@reach/router';

const admins = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'image',
  },
  {
    title: 'Personal Info',
    dataIndex: 'personalInfo',
    render: admin => (
      <div>
        <strong>Name: </strong>
        {admin.name}
        <br />
        <strong>Email: </strong>
        {admin.email}
        <br />
        <strong>Phone:</strong>
        {admin.phone}
        <br />
      </div>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: admin => (
      <div>
        <strong>Address: </strong>
        {admin.address}
        <br />
        <strong>Zip Code: </strong>
        {admin.zipCode}
        <br />
        <strong>City: </strong> {admin.city}
        <br />
        <strong>Country: </strong>
        {admin.country}
      </div>
    ),
  },

  {
    title: 'Admin Types',
    dataIndex: 'adminTypes',
    render: () => (
      <div>
        <Tag color="#3c8dbc">Sub Admin</Tag>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: () => (
      <div>
        <Tag color="#4ea75b">Active</Tag>
      </div>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: id => {
      const menu = (
        <Menu>
          <Menu.Item key="0" onClick={() => navigate('/dsfsd')}>
            <Icon type="edit" /> Edit Admin
          </Menu.Item>

          <Menu.Item key="2" onClick={() => navigate('/dfsdf')}>
            <Icon type="delete" />
            Delete Admin
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#no">
            Actions
            <Icon type="down" />
          </a>
        </Dropdown>
      );
    },
  },
];

export { admins };
