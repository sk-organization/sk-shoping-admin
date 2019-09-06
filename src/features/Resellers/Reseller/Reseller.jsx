import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row } from 'antd';
import { withApollo } from 'react-apollo';
import { resellerColumns } from '../tableConfig';
import {
  FETCH_RESELLER,
  FETCH_SOLD_PRODUCTS,
  FETCH_SOLD_PRODUCTS_COUNT,
} from '../Queries/Queries';
import Profile from './Profile/Profile';
import Graph from './Graph/Graph';
import SoldProducts from './SoldProducts/SoldProducts';

const Reseller = props => {
  const { id, client } = props;
  const [reseller, setReseller] = useState({});
  const [products, setProducts] = useState([]);
  const [resellerLoading, setResellerLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    results: 10,
    pageSize: 10,
    total: 0,
  });
  const fetchSoldProducts = useCallback(
    async (variables, current) => {
      setProductsLoading(true);
      const resCount = await client.query({
        query: FETCH_SOLD_PRODUCTS_COUNT,
        variables,
      });
      setPagination({
        ...pagination,
        current,
        total: resCount.data.soldProductsConnection.aggregate.count,
      });
      const res = await client.query({
        query: FETCH_SOLD_PRODUCTS,
        variables,
      });
      setProducts(res.data.soldProductsConnection);
      setProductsLoading(false);
    },
    [client, pagination],
  );

  useEffect(() => {
    setResellerLoading(true);
    client
      .query({
        query: FETCH_RESELLER,
        variables: { id },
      })
      .then(async ({ data }) => {
        setReseller(data.reseller);
        setResellerLoading(false);
        fetchSoldProducts({
          where: {
            reseller: {
              id: data.reseller.id,
            },
          },
          skip: 0,
        });
      });
  }, [client, id, fetchSoldProducts]);

  const handleTableChange = pg => {
    fetchSoldProducts(
      {
        where: {
          reseller: {
            id: reseller.id,
          },
        },
        skip: pg.results * (pg.current - 1),
      },
      pg.current,
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={30}>
        <Col span={12}>
          <Profile resellerLoading={resellerLoading} reseller={reseller} />
        </Col>
        <Col span={12}>
          <Graph id={id} />
        </Col>
      </Row>
      <SoldProducts
        fetchSoldProducts={fetchSoldProducts}
        handleTableChange={handleTableChange}
        reseller={reseller}
        columns={resellerColumns}
        pagination={pagination}
        products={products}
        productsLoading={productsLoading}
      />
    </div>
  );
};

export default withApollo(Reseller);
