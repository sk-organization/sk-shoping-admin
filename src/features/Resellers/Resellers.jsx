import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Input, Table, Spin } from 'antd';

import client from '../../app/config/apollo';
import { resellersColumns } from './tableConfig';
import { FETCH_RESELLERS, SEARCH_RESELLERS } from './Queries/Queries';

const { Search } = Input;

const Reseller = () => {
  const [resellers, error, setResellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .query({
        query: FETCH_RESELLERS,
      })
      .then(res => {
        setLoading(false);
        setResellers(res.data.resellers);
      });
  }, []);

  if (error) return <div>Server Error...</div>;

  return (
    <div>
      <Search
        placeholder="Search Resellers"
        enterButton="Search"
        size="large"
        onChange={event => {
          setLoading(true);
          client
            .query({
              query: SEARCH_RESELLERS,
              variables: {
                term: event.target.value,
              },
            })
            .then(res => {
              setLoading(false);
              setResellers(res.data.resellers);
            });
        }}
      />
      <br />
      <br />
      <Spin spinning={loading} size="large" />
      <Table
        onRow={record => ({
          onClick: () => navigate(`/reseller/${record.id}`),
        })}
        columns={resellersColumns}
        dataSource={resellers}
      />
    </div>
  );
};

export default Reseller;
