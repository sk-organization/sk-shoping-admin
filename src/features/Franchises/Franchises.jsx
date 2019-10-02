import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Input, Button } from 'antd';
import { navigate } from '@reach/router';
import gql from 'graphql-tag';
import { query } from './graphql';
import client from '../../app/config/apollo';
import { franchisesColumns } from './config';
import { margin, align, component } from '../../styles';

const { Search } = Input;
const DATA_PER_PAGE = 3;

const Franchises = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [franchises, setFranchises] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: FranchiseWhereInput) {
          totalFranchises(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalFranchises });
  };

  const fetchFranchises = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: query.franchises,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
        },
      });

      setFranchises(data.franchises);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchFranchises(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchFranchises();
  }, []);

  console.log(franchises);

  if (error) return <div>Server Error...</div>;

  const searchFranchises = event => {
    const term = event.target.value;
    const where = { user: { name_contains: term } };
    if (term.trim() !== '') {
      fetchFranchises(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchFranchises();
    }
  };

  const franchisesMapped = franchises.map((franchise, index) => ({
    ...franchise,
    sn: index + 1,
    image: franchise.user.image,
    franchiseInfo: {
      name: franchise.user.name,
      email: franchise.user.email,
      phone: franchise.user.phone,
      gender: franchise.user.gender,
      country: franchise.user.country,
    },
    franchiseLocationInfo: {
      address1: franchise.user.location && franchise.user.location.address1,
      address2: franchise.user.location && franchise.user.location.address2,
      city: franchise.user.location && franchise.user.location.city,
      zipCode: franchise.user.location && franchise.user.location.zipCode,
    },
  }));

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <Search
            enterButton
            placeholder="Search Franchises"
            style={component.search}
            onChange={searchFranchises}
          />
        </Col>
        <Col span={12} style={align.right}>
          <div>
            <Button
              onClick={() => navigate('/franchises/add-franchise')}
              type="primary"
            >
              Add New Franchise
            </Button>
          </div>
        </Col>
      </Row>
      <br />
      <Table
        pagination={pagination}
        loading={loading}
        onRowClick={franchise => navigate(`/franchise/${franchise.id}`)}
        dataSource={franchisesMapped}
        columns={franchisesColumns}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Franchises;
