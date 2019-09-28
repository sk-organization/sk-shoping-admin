import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Row, Col } from 'antd';
import { navigate } from '@reach/router';
import gql from 'graphql-tag';
import { categoriesTable } from './config';

import { query } from './graphql';
import client from '../../app/config/apollo';
import { margin, align, component } from '../../styles';

const { Search } = Input;
const DATA_PER_PAGE = 2;

const Categories = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [categories, setCategories] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: CategoryWhereInput) {
          totalCategories(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalCategories });
  };

  const fetchCategories = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: query.categories,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
        },
      });

      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchCategories(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchCategories();
  }, []);

  if (error) return <div>Server Error!</div>;

  const addNewCategory = () => navigate('/categories/add-categories');

  const searchCategories = event => {
    const term = event.target.value;
    const where = { name_contains: term };
    if (term.trim() !== '') {
      fetchCategories(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchCategories();
    }
  };

  const categoriesMapped = categories.map(category => ({
    ...category,
    quickActions: {
      label: category.name,
      key: category.id,
    },
  }));

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <Search
            autoComplete="on"
            style={component.search}
            placeholder="Search Category"
            enterButton="Search"
            onChange={searchCategories}
          />
        </Col>
        <Col span={12} style={align.right}>
          <Button onClick={addNewCategory} type="primary">
            Add New Categories
          </Button>
        </Col>
      </Row>
      <Table
        pagination={pagination}
        loading={loading}
        className="_categories--table"
        rowKey={category => category.id}
        dataSource={categoriesMapped}
        columns={categoriesTable}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Categories;
