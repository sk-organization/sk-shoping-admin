import React from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;

const SoldProducts = props => {
  const {
    fetchSoldProducts,
    handleTableChange,
    reseller,
    columns,
    pagination,
    products,
    productsLoading,
  } = props;

  return (
    <React.Fragment>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '25px',
          marginBottom: '20px',
          marginTop: '40px',
        }}
      >
        Sold Items
      </h1>
      <Search
        placeholder="Search Sold Products"
        enterButton="Search"
        size="large"
        onChange={async e => {
          fetchSoldProducts({
            where: {
              reseller: {
                id: reseller.id,
              },
              product: {
                name_contains: e.target.value,
              },
            },
            skip: 0,
          });
        }}
      />
      <br />
      <br />
      {productsLoading ? (
        <p>loading products...</p>
      ) : (
        <Table
          pagination={pagination}
          columns={columns}
          onChange={handleTableChange}
          dataSource={products.edges && products.edges}
        />
      )}
    </React.Fragment>
  );
};

export default SoldProducts;
