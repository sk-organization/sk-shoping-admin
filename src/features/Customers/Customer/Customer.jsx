import React from 'react';
import { Tabs, Icon, Row, Col, Avatar, Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { Line } from 'react-chartjs-2';
import { IMAGE_HOST } from '../../../app/config/constants';
import client from '../../../app/config/apollo';
import { query } from '../graphql';
import Cart from './Cart/Cart';
import { YEARS } from '../config';
import Orders from '../../Orders/Orders';

const { TabPane } = Tabs;

const Comp = props => {
  const { type, text } = props;
  return (
    <span>
      <Icon type={type} />
      {text}
    </span>
  );
};

const Info = ({ label, value }) => (
  <div>
    {label}: <strong>{value}</strong>
  </div>
);

const lineConfig = {
  backgroundColor: 'transparent',
  pointBackgroundColor: '#03c2fc',
  borderColor: '#03c2fc',
  hoverBackgroundColor: '#03c2fc',
  pointBorderColor: '#03c2fc',
  label: 'Purchased Product',
};

const Customer = props => {
  const { id } = props;

  const { data, loading, error } = useQuery(query.user, {
    variables: {
      id,
    },
    client,
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  const { user } = data;
  const { id: userId, name, email, phone, country, gender } = user;
  let { location, purchasedRecord = [] } = user;
  if (!location) location = {};

  purchasedRecord = [10, 20, 50, 10, 80, 120, 170, 30, 140, 190, 250, 400];

  const chartData = {
    labels: YEARS,
    datasets: [
      {
        ...lineConfig,
        data: purchasedRecord,
      },
    ],
  };

  return (
    <>
      <Row gutter={10}>
        <Col span={6}>
          <h3>User Info</h3>
          <Info label="Name" value={name} />
          <Info label="Email" value={email} />
          <Info label="Phone" value={phone} />

          {user.country && <Info label="Country" value={country} />}

          <Info label="Gender" value={gender} />
          <br />

          {Object.keys(location)[0] && <h3>Location Info</h3>}

          {location.city && <Info label="City" value={location.city} />}

          {location.address1 && (
            <Info label="Address1" value={location.address1} />
          )}

          {location.address2 && (
            <Info label="address2" value={location.address2} />
          )}

          {location.zipCode && (
            <Info label="zipCode" value={location.zipCode} />
          )}
        </Col>

        <Col span={6}>
          <Avatar shape="circle" size={150} src={IMAGE_HOST + user.image} />
        </Col>

        <Col span={12}>
          <Line data={chartData} />
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab={<Comp type="shopping" text="Orders" />} key="1">
          <Orders where={{ orderBy: { id: user.id } }} />
        </TabPane>
        <TabPane tab={<Comp type="shopping-cart" text="Cart" />} key="2">
          <Cart status="CART" userId={userId} />
        </TabPane>
        <TabPane tab={<Comp type="heart" text="WishList" />} key="3">
          <Cart status="WISHLIST" userId={userId} />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Customer;
