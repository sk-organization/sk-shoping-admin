import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Pie, Line } from 'react-chartjs-2';

import { IMAGE_HOST } from '../../../app/config/constants';
import client from '../../../app/config/apollo';
import { FETCH_SELLER } from '../graphql/Queries';
import margin from '../../../styles/margin';

import Products from '../../Products/Products';

const Seller = props => {
  const { id } = props;
  const [seller, setSeller] = useState({});

  useEffect(() => {
    client
      .query({
        query: FETCH_SELLER,
        variables: { id },
      })
      .then(async ({ data }) => {
        setSeller(data.seller);
      });
  }, [id]);

  const styles = {
    color: 'green',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const { user = {}, bankDetails = {} } = seller;

  if (!user) return <p>...</p>;
  // const { id } = props;
  return (
    <div>
      <Row>
        <Col span={8}>
          <h4>User Details</h4>
          <div>
            <span>Name:</span> <span style={styles}>{user.name}</span>
          </div>
          <div>
            <>
              <span>Email:</span> <span style={styles}>{user.email}</span>
            </>
          </div>

          <div>
            <span>Phone:</span>
            <span style={styles}>{user.phone}</span>{' '}
          </div>
          {user.location && (
            <div>
              <span>City:</span>{' '}
              <span style={styles}>{user.location.city}</span>{' '}
            </div>
          )}

          <div>
            <span>Gender:</span>
            <span style={styles}>{user.gender}</span>{' '}
          </div>
        </Col>

        <Col span={8}>
          <h4>Seller Details:</h4>
          Shop Name: <span style={styles}>{seller.shopName}</span>
          <br />
          {seller.website && (
            <>
              Website: <span style={styles}>{seller.website}</span>
            </>
          )}
          <br />
          {user.bankDetails && (
            <>
              Bank Name: <span style={styles}> {bankDetails.bankName}</span>
              <br />
              Account Number:{' '}
              <span style={styles}> {bankDetails.accountNumber}</span>
              <br />
              IFSC Code: <span style={styles}> {bankDetails.IFSC_CODE}</span>
            </>
          )}
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <img
            style={{ height: '150px', width: '70', borderRadius: '50%' }}
            src={IMAGE_HOST + user.image}
            alt="Seller"
          />
        </Col>
      </Row>

      <Row gutter={10} style={{ ...margin.mt15, ...margin.mb15 }}>
        <Col span={8}>
          <Pie
            data={{
              datasets: [
                {
                  data: [40, 40, 30, 20, 30, 13, 23, 28],
                  backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffcd56',
                    '#D01F39',
                    '#EF626C',
                    '#441678',
                    '#FEC300',
                    '#70EE9C',
                    '#EF9118',
                    '#51A3A3',
                  ],
                },
              ],
              labels: [
                'Kurti',
                'Saree',
                'Lehenga',
                'Suit',
                'Shoes',
                'Cosmetics',
                'Electronics',
                'Dairy',
              ],
            }}
          />
          <h2>Total Items</h2>
          <h1>1k</h1>
        </Col>

        <Col span={8}>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'April', 'June'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  pointBackgroundColor: '#03c2fc',
                  borderColor: '#03c2fc',
                  hoverBackgroundColor: '#03c2fc',
                  pointBorderColor: '#03c2fc',
                  label: 'Listed Products',
                  data: [10, 20, 50, 80, 100],
                },
              ],
            }}
          />
          <h2>Listed Product</h2>
          <h1>60.8k</h1>
        </Col>

        <Col span={8}>
          <Line
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'April', 'June'],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  pointBackgroundColor: '#03c2fc',
                  borderColor: '#03c2fc',
                  hoverBackgroundColor: '#03c2fc',
                  pointBorderColor: '#03c2fc',
                  label: 'Sold Products',
                  data: [10, 20, 50, 80, 100],
                },
              ],
            }}
          />
          <h2>Sold Products</h2>
          <h1>25.5k</h1>
        </Col>
      </Row>

      <Products where={{ seller: { id: seller.id } }} />
    </div>
  );
};

export default Seller;
