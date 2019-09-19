import React, { useState, useEffect } from 'react';
import { Input, Table, Spin, Button, Col, Row } from 'antd';
import { navigate } from '@reach/router';

import client from '../../app/config/apollo';
import { userColumns } from './tableConfig';
import { FETCH_SELLERS, SEARCH_SELLERS } from './graphql/Queries';
import { margin, align } from '../../styles';

const { Search } = Input;

const Seller = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setLoading(true);
    client
      .query({
        query: FETCH_SELLERS,
      })
      .then(res => {
        setLoading(false);
        setSellers(res.data.sellers);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (error) return <div>Server Error...</div>;

  return (
    <div>
      <Row style={margin.mb15}>
        <Col span={12}>
          <div>
            <Search
              enterButton
              placeholder="Search Sellers"
              style={{ width: 300 }}
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
        </Col>
        <Col span={12} style={align.right}>
          <div>
            <Button onClick={() => navigate('/add-new-seller')} type="primary">
              Add New Seller
            </Button>
          </div>
        </Col>
      </Row>

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
