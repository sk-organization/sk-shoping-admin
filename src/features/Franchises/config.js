import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from '../../app/config/constants';

const franchisesColumns = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <div style={{ marginTop: 20 }}>
        <Avatar shape="circle" size={60} src={IMAGE_HOST + image} />
      </div>
    ),
  },
  {
    title: 'Basic Info',
    dataIndex: 'franchiseInfo',
    render: frenchise => (
      <div>
        Name: <strong>{frenchise.name}</strong>
        <br />
        Phone: <strong>{frenchise.phone}</strong>
        <br />
        Email: <strong>{frenchise.email}</strong>
      </div>
    ),
  },
  {
    title: 'Location Info',
    dataIndex: 'franchiseLocationInfo',
    render: franchiseLocation => (
      <div>
        City: <strong>{franchiseLocation.city}</strong>
        <br />
        Address:{' '}
        <strong>
          {franchiseLocation.address1}, {franchiseLocation.address2}
        </strong>
        <br />
        ZipCode: <strong>{franchiseLocation.zipCode}</strong>
      </div>
    ),
  },
  {
    title: 'Franchise Sold',
    dataIndex: 'franchiseSold',
  },
  {
    title: 'Total Sold',
    dataIndex: 'totalSold',
  },
];

export { franchisesColumns };
