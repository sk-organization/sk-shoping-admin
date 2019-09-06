import React, { useState, useEffect } from 'react';
import { Input, Table, Spin, Button } from 'antd';
import { navigate } from '@reach/router';

import client from '../../app/config/apollo';
import { userColumns } from './tableConfig';
import { FETCH_SELLERS, SEARCH_SELLERS } from './graphql/Queries';

const { Search } = Input;

const Seller = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .query({
        query: FETCH_SELLERS,
      })
      .then(res => {
        setLoading(false);
        setSellers(res.data.sellers);
      });
  }, []);

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
  };

  return (
    <div>
      <div style={style}>
        <h3>Listing All Sellers</h3>
        <Button onClick={() => navigate('/add-new-seller')} type="primary">
          Add New Seller
        </Button>
      </div>
      <br />

      <div style={{ textAlign: 'right' }}>
        <Search
          enterButton
          placeholder="Search Sellers"
          style={{ width: 250 }}
          size="medium"
          onChange={event => {
            setLoading(true);
            client
              .query({
                query: SEARCH_SELLERS,
                variables: {
                  term: event.target.value,
                },
              })
              .then(res => {
                setLoading(false);
                setSellers(res.data.sellers);
              });
          }}
        />
      </div>
      <br />
      <br />
      <Spin spinning={loading} size="large">
        <Table
          onRow={record => ({
            onClick: () => navigate(`/seller/${record.id}`),
          })}
          columns={userColumns}
          dataSource={sellers}
        />
      </Spin>
    </div>
  );
};

export default Seller;
