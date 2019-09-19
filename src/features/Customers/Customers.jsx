import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button, Table, Row, Col, Input } from 'antd';
import { query } from './graphql';
import { customersTable } from './config';
import client from '../../app/config/apollo';
import { align, margin, component } from '../../styles';

const { Search } = Input;

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.customers,
      });
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <div>Server Error...</div>;

  console.log(users);

  const customersMapped = users.map((user, index) => ({
    ...user,
    sn: index + 1,
    userInfo: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      country: user.country,
    },
    userLocationInfo: {
      address1: user.location && user.location.address1,
      address2: user.location && user.location.address2,
      city: user.location && user.location.city,
      zipCode: user.location && user.location.zipCode,
    },
  }));

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <Search
            enterButton
            placeholder="Search Customer"
            style={{ width: 300 }}
          />
        </Col>
        <Col span={12} style={align.right}>
          <div>
            <Button
              onClick={() => navigate('/products/add-product')}
              type="primary"
            >
              Add New Customers
            </Button>
          </div>
        </Col>
      </Row>
      <br />
      <Table
        onRow={user => ({
          onClick: () => navigate(`/customer/${user.id}`),
        })}
        loading={loading}
        className="_products--table"
        rowKey={product => product.id}
        dataSource={customersMapped}
        columns={customersTable}
      />
    </div>
  );
};

export default Customers;
