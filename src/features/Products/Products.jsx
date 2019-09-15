import React from 'react';
import { Table, Cascader, Input, Button } from 'antd';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { productsTable } from './config';
import { query } from './graphql';
import client from '../../app/config/apollo';
import { margin } from '../../styles';

const { Search } = Input;

const style = {
  textAlign: 'right',
  marginBottom: 20,
};

const Products = ({ where = {} }) => {
  const {
    data: { categories = [] },
  } = useQuery(query.categories, {
    client,
  });

  const {
    data: { subCategories = [] },
  } = useQuery(query.subCategories, {
    client,
  });

  const {
    data: { products = [] },
    refetch: fetchProducts,
  } = useQuery(query.products, {
    variables: {
      where,
    },
    client,
  });
  const productsMapped = products.map(product => ({
    ...product,
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
      fetchProducts({ where: {} });
    }
  };

  const displayRender = label => label[label.length - 1];

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
          onChange={event => {
            const term = event.target.value;
            if (term.trim() !== '') {
              fetchProducts({
                where: {
                  name_contains: term,
                },
              });
            }
          }}
        />
        <Button
          style={margin.ml10}
          type="default"
          onClick={() => fetchProducts({ where: {} })}
        >
          Clear Search
        </Button>
        <br />
        <br />
      </div>
      <Table
        className="_products--table"
        rowKey={product => product.id}
        dataSource={productsMapped}
        columns={productsTable}
      />
    </div>
  );
};

export default Products;
