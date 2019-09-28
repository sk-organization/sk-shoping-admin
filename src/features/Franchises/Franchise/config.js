import React from 'react';
import { Avatar, Tag } from 'antd';

const frenchiseColumns = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: () => (
      <Avatar
        alt="productimage"
        size={120}
        src="https://d8evit4zy2nlo.cloudfront.net/media/catalog/product/c/h/chrome-yellow-anarkali-resham-embroidered-suit-with-contrast-red-dupatta-470093_2_.jpg"
      />
    ),
  },
  {
    title: 'Product Info',
    dataIndex: 'productInfo',
    render: product => (
      <div>
        <div>
          Name: <strong>{product.name}</strong>
        </div>
        <div>
          Price: <strong>{product.price}</strong>
        </div>
        <div>
          Category: <strong>{product.category}</strong>
        </div>
        <div>
          Tags:{' '}
          <Tag color="blue">
            <strong>{product.tags}</strong>
          </Tag>
        </div>
        <div>
          Seller Price: <strong>{product.sellerPrice}</strong>
        </div>
        <div>
          Seller: <strong>{product.seller}</strong>
        </div>
      </div>
    ),
  },
  {
    title: 'Variation Info',
    dataIndex: 'variationInfo',
    render: variation => (
      <div>
        Color: <strong>{variation.color}</strong>
        <br />
        Size:{' '}
        <strong>
          {variation.size} ({variation.quantity})
        </strong>
      </div>
    ),
  },

  {
    title: 'Quantity',
    dataIndex: 'qty',
  },
  {
    title: 'Margin',
    dataIndex: 'margin',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];

export { frenchiseColumns };
