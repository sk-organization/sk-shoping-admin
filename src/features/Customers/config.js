import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from '../../app/config/constants';

const customersTable = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <div>
        <Avatar shape="circle" size={60} src={IMAGE_HOST + image} />
      </div>
    ),
  },

  {
    title: 'Personal Info',
    dataIndex: 'userInfo',
    render: user => (
      <div>
        <div>
          <strong>Name: </strong> {user.name}
        </div>
        <div>
          <strong>Email: </strong>
          {user.email}
        </div>
        <div>
          <strong>Phone: </strong>
          {user.phone}
        </div>
        {/* <div>
          <strong>Country: </strong>
          {user.country}
        </div>
        <div>
          <strong>Gender: </strong>
          {user.gender}
        </div> */}
      </div>
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
