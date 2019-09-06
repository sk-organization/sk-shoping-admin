import React from 'react';
import { Row, Col } from 'antd';
import { useQuery } from '@apollo/react-hooks';

import client from '../../../../app/config/apollo';
import { query } from '../../graphql';
import ProductInfo from './ProductInfo';
import Carousel from './Carousel';
import SellerInfo from './SellerInfo';
import VariationInfo from './VariationInfo';
import Sold from './Graph/Sold';
import Cart from './Graph/Cart';
import WishList from './Graph/WishList';
import Viewed from './Graph/Viewed';

const Product = props => {
  const { id } = props;

  const { loading, error, data } = useQuery(query.product, {
    client,
    variables: {
      id,
    },
  });

  if (loading) return <p>Laoding..</p>;
  if (error) return <p>Error...</p>;

  const { product } = data;
  console.log(data);

  return (
    <div>
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <ProductInfo product={product} />
          </Col>
          <Col span={12}>
            <Carousel images={product.images} />
          </Col>
        </Row>
      </div>

      <div>
        <Row gutter={10}>
          <Col span={12}>
            <SellerInfo seller={product.seller} />
          </Col>
          <Col span={12}>
            <VariationInfo variations={product.variations} />
          </Col>
        </Row>
      </div>
      <br />
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <Sold />
          </Col>
          <Col span={12}>
            <Cart />
          </Col>
        </Row>
      </div>

      <div>
        <Row gutter={10}>
          <Col span={12}>
            <WishList />
          </Col>
          <Col span={12}>
            <Viewed />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Product;
