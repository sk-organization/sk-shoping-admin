import React, { useState, useEffect } from 'react';
import { Table, Cascader, Input, Button, Checkbox } from 'antd';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { productsTable } from './config';
import { query } from './graphql';
import client from '../../app/config/apollo';
import { margin } from '../../styles';

const { Search } = Input;
const DATA_PER_PAGE = 8;

const style = {
  textAlign: 'right',
  marginBottom: 20,
};

const Products = ({ where = {} }) => {
  const [pLoading, setpLoading] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [pError, setpError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: ProductWhereInput) {
          totalProducts(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalProducts });
  };

  const fetchProducts = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
  ) => {
    try {
      setpLoading(true);
      const { data } = await client.query({
        query: query.products,
        variables: {
          where: { isApproved: true, ...where, ...queryWhere },
          first,
          skip,
        },
      });
      setProducts(data.products);
      setpLoading(false);
    } catch (error) {
      setpError(true);
    }
  };

  const handleTableChange = paginationInfo => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    fetchTotal(where);
    fetchProducts(where, skip);
  };

  useEffect(() => {
    fetchTotal();
    fetchProducts();
  }, []);

  const searchProducts = event => {
    const term = event.target.value;
    const where = { name_contains: term };
    if (term.trim() !== '') {
      fetchProducts(where);
      fetchTotal(where);
    } else {
      fetchTotal();
      fetchProducts();
    }
  };

  const { data: cData = {}, error: cError, loading: cLoading } = useQuery(
    query.categories,
    {
      client,
    },
  );

  const { data: sData = {}, error: sError, loading: sLoading } = useQuery(
    query.subCategories,
    {
      client,
    },
  );

  if (cError || sError || pError) return <div>Server Error...</div>;

  const { categories = [] } = cData;
  const { subCategories = [] } = sData;

  const productsMapped = products.map(product => ({
    ...product,
    quickActions: {
      id: product.id,
      isApproved: product.isApproved,
    },
    meta: {
      name: product.name,
      category: product.category.name,
      price: product.price,
      discountPercent: product.discountPercent,
      sellerShopName: product.seller.shopName,
      seller: product.seller.user.name,
      viewed: product.viewed,
      tags: product.tags,
    },
    date: {
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    },
  }));

  const subCategoriesMapped = subCategories.map(subCategory => ({
    id: subCategory.id,
    label: subCategory.name[0].toUpperCase() + subCategory.name.slice(1),
    value: subCategory.name,
    category: subCategory.category,
  }));

  const categoriesMapped = categories.map(category => ({
    label: category.name[0].toUpperCase() + category.name.slice(1),
    value: category.name,
    children: subCategoriesMapped.filter(
      subCategory => subCategory.category.id === category.id,
    ),
  }));

  const onChange = (_, option) => {
    if (option[0]) {
      const subCategoryId = option[1].id;
      fetchProducts({
        where: {
          subCategory: {
            id: subCategoryId,
          },
        },
      });
    } else {
      fetchProducts({ where: { isApproved: true } });
    }
  };

  const displayRender = label => label[label.length - 1];

  const handleStatusChanged = event => {
    if (event.target.checked === true) {
      fetchProducts({
        where: {
          isApproved: false,
        },
      });
    } else {
      fetchProducts({ where: { isApproved: true } });
    }
  };

  return (
    <div>
      <div style={style}>
        <Button
          onClick={() => navigate('/products/add-product')}
          type="primary"
        >
          Add New Products
        </Button>
      </div>
      <div>
        <b>Filter By Category/Products: </b>
        <Cascader
          placeholder="Select Category"
          options={categoriesMapped}
          expandTrigger="hover"
          displayRender={displayRender}
          onChange={onChange}
        />
        <Search
          autoComplete="on"
          style={{ width: 300, marginLeft: 10 }}
          placeholder="Search Products"
          enterButton="Search"
          onChange={searchProducts}
        />
        <Button
          style={margin.ml10}
          type="default"
          onClick={() => fetchProducts({ where: {} })}
        >
          Clear Search
        </Button>
        <Checkbox style={margin.ml30} onChange={handleStatusChanged}>
          Show Pending Products
        </Checkbox>
        <br />
        <br />
      </div>
      <Table
        pagination={pagination}
        loading={cLoading || sLoading || pLoading}
        className="_products--table"
        rowKey={product => product.id}
        dataSource={productsMapped}
        columns={productsTable}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Products;
