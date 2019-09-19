import React from 'react';
import { Button, Card, Label } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Row, Col, Tag } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { query } from '../graphql';
import client from '../../../app/config/apollo';
import { IMAGE_HOST } from '../../../app/config/constants';

const Customer = () => {
  const { data, error, loading } = useQuery(query.users, {
    variables: {},
    client,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;
  const { users } = data;

  const loyalCustomer = users[0];
  const mostTimeSpend = users[1];
  const mostReffrering = users[2];

  console.log(users);

  return (
    <div>
      <Row gutter={20}>
        <Col span={6}>
          <Card
            image={
              <Link title="View Profile" to={`/customer/${loyalCustomer.id}`}>
                <img
                  src={IMAGE_HOST + loyalCustomer.image}
                  alt="Loyal Customer"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{loyalCustomer.name}</h4>
                <Label size="small" as="a" color="blue" tag>
                  LC
                </Label>
              </div>
            }
            meta="Loyal Customer"
            description={
              <div>
                <br />
                <strong>Email:</strong>
                {loyalCustomer.email}
                <br />
                <strong>Phone:</strong>
                {loyalCustomer.phone}
                <br />
                <br />
                <Tag color="blue">Products Purcahsed: 100 </Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}>
          <Card
            image={
              <Link title="View Profile" to={`/customer/${mostTimeSpend.id}`}>
                <img
                  src={IMAGE_HOST + mostTimeSpend.image}
                  alt="Most Time Spend"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{mostTimeSpend.name}</h4>
                <Label size="small" as="a" color="purple" tag>
                  MTS
                </Label>
              </div>
            }
            meta="Most Time Spend"
            description={
              <div>
                <br />
                <strong>Email:</strong>
                {mostTimeSpend.email}
                <br />
                <strong>Phone:</strong>
                {mostTimeSpend.phone}
                <br />
                <br />
                <Tag color="orange">Time Spend: 545 Hours</Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}>
          <Card
            image={
              <Link title="View Profile" to={`/customer/${mostReffrering.id}`}>
                <img
                  src={IMAGE_HOST + mostReffrering.image}
                  alt="Most Reffering"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{mostReffrering.name}</h4>
                <Label size="small" as="a" color="orange" tag>
                  MSC
                </Label>
              </div>
            }
            meta="Most Reffred Cutomers"
            description={
              <div>
                <br />
                <strong>Email:</strong>
                {mostReffrering.email}
                <br />
                <strong>Phone:</strong>
                {mostReffrering.phone}
                <br />
                <br />
                <Tag color="purple">Most Ref Customers: 250</Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
};

export default Customer;
