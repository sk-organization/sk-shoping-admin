import React from 'react';
import { navigate } from '@reach/router';
import { Menu, Icon, Dropdown, Tag } from 'antd';

const manageRoles = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Type',
    dataIndex: 'adminType',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    render: date => (
      <div>
        <strong>Added Date: </strong>
        {date.addedDate}
        <br />
        <strong>Modified Date: </strong>
        {date.modifiedDate}
        <br />
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
    title: 'Manage Roles',
    dataIndex: 'manageRoles',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: id => {
      const menu = (
        <Menu>
          <Menu.Item key="0" onClick={() => navigate('/dsfsd')}>
            <Icon type="edit" /> Edit Type
          </Menu.Item>

          <Menu.Item key="2" onClick={() => navigate('/dfsdf')}>
            <Icon type="delete" />
            Delete
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

export { manageRoles };
