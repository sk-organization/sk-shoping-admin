import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Row, Col, Icon } from 'antd';
import { navigate } from '@reach/router';
import { subCategoriesTable } from './config';

import { query } from './graphql';
import client from '../../../app/config/apollo';
import { align, margin, component } from '../../../styles';

const { Search } = Input;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
};

const SubCategories = () => {
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const fetchSubCategories = async where => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.subCategories,
        variables: {
          where,
        },
      });
      setSubCategories(res.data.subCategories);
      setLoading(false);
    } catch (error) {}
  };

  const searchSubCategories = event => {
    const term = event.target.value;
    if (term.trim() !== '') {
      fetchSubCategories({
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
      fetchSubCategories();
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  const addNewSubCategory = () => navigate('/categories/add-subCategories');

  const subCategoriesMapped = subCategories.map(subCategory => ({
    ...subCategory,
    quickActions: {
      name: subCategory.name,
    },
  }));

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <Search
            autoComplete="on"
            style={component.search}
            placeholder="Search Sub Category"
            enterButton="Search"
            onChange={searchSubCategories}
          />
        </Col>
        <Col span={12} style={align.right}>
          <Button onClick={addNewSubCategory} type="primary">
            <Icon type="plus" />
            Add New
          </Button>
        </Col>
      </Row>
      <Table
        loading={loading}
        className="_categories--table"
        rowKey={subCategory => subCategory.id}
        dataSource={subCategoriesMapped}
        columns={subCategoriesTable}
      />
    </div>
  );
};

export default SubCategories;
