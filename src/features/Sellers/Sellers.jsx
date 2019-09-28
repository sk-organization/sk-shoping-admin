import React, { useState, useEffect } from 'react';
import { Input, Table, Spin, Button, Col, Row } from 'antd';
import Highlighter from 'react-highlight-words';
import { navigate } from '@reach/router';
import gql from 'graphql-tag';

import client from '../../app/config/apollo';
import { userColumns } from './tableConfig';
import { margin, align, component } from '../../styles';
import { query } from './graphql';

const { Search } = Input;
const DATA_PER_PAGE = 2;

const Seller = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [sellers, setSellers] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: SellerWhereInput) {
          totalSellers(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalSellers });
  };

  const fetchSellers = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: query.sellers,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
        },
      });

      setSellers(data.sellers);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchSellers(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchSellers();
  }, []);

  if (error) return <div>Server Error...</div>;

  const searchSellers = event => {
    const term = event.target.value;
    const where = { user: { name_contains: term } };
    if (term.trim() !== '') {
      fetchSellers(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchSellers();
    }
  };

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <div>
            <Search
              autoComplete="on"
              style={component.search}
              placeholder="Search Category"
              enterButton="Search"
              onChange={searchSellers}
            />
          </div>
        </Col>
        <Col span={12} style={align.right}>
          <div>
            <Button onClick={() => navigate('/add-new-seller')} type="primary">
              Add New Seller
            </Button>
          </div>
        </Col>
      </Row>

      <br />
      <Spin spinning={loading} size="large">
        <Table
          pagination={pagination}
          onRow={record => ({
            onClick: () => navigate(`/seller/${record.id}`),
          })}
          columns={userColumns}
          dataSource={sellers}
          onChange={handleTableChange}
        />
      </Spin>
    </div>
  );
};

export default Seller;
