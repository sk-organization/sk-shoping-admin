import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from '../../app/config/constants';

const customersTable = [
  {
    title: 'SR',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <Avatar shape="circle" size={60} src={IMAGE_HOST + image} />
    ),
  },

  {
    title: 'Personal Info',
    dataIndex: 'userInfo',
    render: user => (
      <>
        <>
          <strong>Name: </strong> {user.name}
        </>
        <br />
        <>
          <strong>Email: </strong>
          {user.email}
        </>
        <br />
        <>
          <strong>Phone: </strong>
          {user.phone}
        </>
        <br />
        <>
          <strong>Country: </strong>
          {user.country}
        </>
        <br />
        <>
          <strong>Gender: </strong>
          {user.gender}
        </>
      </>
    ),
  },

  {
    title: 'Address',
    dataIndex: 'userLocationInfo',
    render: location => (
      <div>
        {location.address1 ||
          (location.address2 && (
            <div>
              <strong>Address: </strong>
              {`${location.address1 || ''},
          ${location.address2 || ''}`}
            </div>
          ))}
        {location.city && (
          <div>
            <strong>City: </strong>
            {location.city}
          </div>
        )}
        {location.zipCode && (
          <div>
            <strong>ZippCode: </strong>
            {location.zipCode}
          </div>
        )}
      </div>
    ),
  },
];

const YEARS = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export { customersTable, YEARS };
