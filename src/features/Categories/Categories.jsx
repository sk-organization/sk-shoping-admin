import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Row, Col, Icon } from 'antd';
import { navigate } from '@reach/router';
import { categoriesTable } from './config';

import { query } from './graphql';
import client from '../../app/config/apollo';
import { margin, align, component } from '../../styles';

const { Search } = Input;

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async where => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.categories,
        variables: {
          where,
        },
      });

      setCategories(res.data.categories);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) return <div>Server Error!</div>;

  const addNewCategory = () => navigate('/categories/add-categories');

  const searchCategories = event => {
    const term = event.target.value;
    if (term.trim() !== '') {
      fetchCategories({
        OR: [
          {
            name_contains: term,
          },
          {
            name_contains: term.toLowerCase(),
          },
          {
            name_contains: term.toUpperCase(),
          },
          {
            name_contains: term[0].toUpperCase() + term.slice(1),
          },
        ],
      });
    } else {
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
        loading={loading}
        className="_categories--table"
        rowKey={category => category.id}
        dataSource={categoriesMapped}
        columns={categoriesTable}
      />
    </div>
  );
};

export default Categories;
