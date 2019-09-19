import React from 'react';
import { Button, Card, Label } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { Row, Col, Tag } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { query } from '../graphql';
import client from '../../../app/config/apollo';
import { IMAGE_HOST } from '../../../app/config/constants';

const Products = () => {
  const { data, error, loading } = useQuery(query.products, {
    variables: {},
    client,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;
  const { products } = data;

  const MostPurchased = products[1];
  const mostRating = products[5];
  const mostLiked = products[7];
  const MostReffered = products[9];

  console.log(products);

  return (
    <div>
      <Row gutter={20}>
        <Col span={6}>
          <Card
            image={
              <Link title="View Products" to={`/product/${MostPurchased.id}`}>
                <img
                  src={IMAGE_HOST + MostPurchased.image}
                  alt="Most Purchased Products"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{MostPurchased.name}</h4>
                <Label size="small" as="a" color="blue" tag>
                  MPP
                </Label>
              </div>
            }
            meta="Most Purcahsed Product"
            description={
              <div>
                <br />
                <strong>Name:</strong>
                {MostPurchased.name}
                <br />
                <strong>Price:</strong>
                {MostPurchased.price}
                <br />
                <br />
                <Tag color="blue">Purchased Qty: 250 </Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}>
          <Card
            image={
              <Link title="View Products" to={`/product/${mostRating.id}`}>
                <img
                  src={IMAGE_HOST + mostRating.image}
                  alt="Most Rating Product"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{mostRating.name}</h4>
                <Label size="small" as="a" color="orange" tag>
                  MRP
                </Label>
              </div>
            }
            meta="Most Rating Product"
            description={
              <div>
                <br />
                <strong>Name:</strong>
                {mostRating.name}
                <br />
                <strong>Price:</strong>
                {mostRating.price}
                <br />
                <br />
                <Tag color="orange">Most Rating Products: 4.9*</Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}>
          <Card
            image={
              <Link title="View Product" to={`/product/${mostLiked.id}`}>
                <img
                  src={IMAGE_HOST + mostLiked.image}
                  alt="Most Liked"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{mostLiked.name}</h4>
                <Label size="small" as="a" color="purple" tag>
                  MLP
                </Label>
              </div>
            }
            meta="Most Liked"
            description={
              <div>
                <br />
                <strong>Name:</strong>
                {mostLiked.name}
                <br />
                <strong>Price:</strong>
                {mostLiked.price}
                <br />
                <br />
                <Tag color="purple">Most Liked Product: 4750</Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
        <Col span={6}>
          <Card
            image={
              <Link title="View Product" to={`/product/${MostReffered.id}`}>
                <img
                  src={IMAGE_HOST + MostReffered.image}
                  alt="Most Reffered"
                  style={{ width: '100%', height: 160 }}
                />
              </Link>
            }
            header={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h4>{mostLiked.name}</h4>
                <Label size="small" as="a" color="green" tag>
                  MRP
                </Label>
              </div>
            }
            meta="Most Reffered"
            description={
              <div>
                <br />
                <strong>Name:</strong>
                {MostReffered.name}
                <br />
                <strong>Price:</strong>
                {MostReffered.price}
                <br />
                <br />
                <Tag color="Green">Most Reffered Products: 10500</Tag>
              </div>
            }
            extra={
              <div style={{ textAlign: 'right' }}>
                <Button size="small" primary>
                  Send Messege
                </Button>
              </div>
            }
          />
          <br />
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default Products;
