import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Row, Col } from 'antd';
import { navigate } from '@reach/router';
import gql from 'graphql-tag';
import { subCategoriesTable } from './config';

import { query } from './graphql';
import client from '../../../app/config/apollo';
import { align, margin, component } from '../../../styles';

const { Search } = Input;
const DATA_PER_PAGE = 10;

const SubCategories = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [subCategories, setSubCategories] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: SubCategoryWhereInput) {
          totalSubCategories(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalSubCategories });
  };

  const fetchSubCategories = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setLoading(true);
      const res = await client.query({
        query: query.subCategories,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
        },
      });
      setSubCategories(res.data.subCategories);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchSubCategories(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchSubCategories();
  }, []);

  const searchSubCategories = event => {
    const term = event.target.value;
    const where = { name_contains: term };
    if (term.trim() !== '') {
      fetchSubCategories(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchSubCategories();
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  if (error) return <div>Server Error...</div>;

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
            Add New SubCategories
          </Button>
        </Col>
      </Row>
      <Table
        // onRowClick={() => navigate(`/sub-categories/${subCategory.name}`)}
        pagination={pagination}
        loading={loading}
        className="_categories--table"
        rowKey={subCategory => subCategory.id}
        dataSource={subCategoriesMapped}
        columns={subCategoriesTable}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default SubCategories;
