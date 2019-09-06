import React from 'react';
import { Tag } from 'antd';

const ProductInfo = ({ product }) => {
  const {
    name,
    price,
    discountPercent,
    sellerPrice,
    returnableSKMoney,
    createdAt,
    dispatchDuration,
    deliveryDuration,
    tags,
  } = product;

  const {
    category: { name: cName },
    subCategory: { name: sName },
  } = product;

  return (
    <div>
      <h2>Product Info</h2>
      <div>
        Name: <strong>{name}</strong>
        <br />
        Price: <strong>{price}</strong>
        <br />
        Discount: <strong>{discountPercent}</strong>
        <br />
        Seller Price: <strong>{sellerPrice}</strong>
        <br />
        SK Money: <strong>{returnableSKMoney}</strong>
        <br />
        Created Date: <strong>{createdAt}</strong>
        <br />
        Dispatch Duration: <strong>{dispatchDuration}</strong>
        <br />
        Delivery Duration: <strong>{deliveryDuration}</strong>
        <br />
        Category: <strong>{cName}</strong>
        <br />
        Sub Category: <strong>{sName}</strong>
        <br />
        Tags:{' '}
        {tags.map(tag => (
          <Tag color="purple">{tag.name}</Tag>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
