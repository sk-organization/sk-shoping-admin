import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Button, Table, Row, Col, Input } from 'antd';
import gql from 'graphql-tag';
import { query } from './graphql';
import { customersTable } from './config';
import client from '../../app/config/apollo';
import { align, margin, component } from '../../styles';

const { Search } = Input;
const DATA_PER_PAGE = 5;

const Customers = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [users, setUsers] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: UserWhereInput) {
          totalUsers(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalUsers });
  };

  const fetchUsers = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: query.users,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
        },
      });

      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchUsers(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchUsers();
  }, []);

  if (error) return <div>Server Error...</div>;

  console.log(users);

  const searchUsers = event => {
    const term = event.target.value;
    const where = { name_contains: term };
    if (term.trim() !== '') {
      fetchUsers(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchUsers();
    }
  };

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
            autoComplete="on"
            style={component.search}
            placeholder="Search Customers"
            enterButton="Search"
            onChange={searchUsers}
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
      <Table
        pagination={pagination}
        onRow={user => ({
          onClick: () => navigate(`/customer/${user.id}`),
        })}
        loading={loading}
        className="_products--table"
        rowKey={product => product.id}
        dataSource={customersMapped}
        columns={customersTable}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Customers;
