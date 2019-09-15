import React from 'react';
import { Avatar } from 'antd';
import { IMAGE_HOST } from '../../../app/config/constants';
import { margin } from '../../../styles';

const orderProduct = [
  {
    title: 'S.N',
    dataIndex: 'sn',
  },

  {
    title: 'Image',
    dataIndex: 'image',
    render: image => (
      <Avatar shape="square" size={100} src={IMAGE_HOST + image} />
    ),
  },

  {
    title: 'Product Info',
    dataIndex: 'info',
    render(info) {
      return (
        <div>
          <div>
            Name: <strong>{info.name}</strong>
          </div>
          <div>
            Price: <strong>₹{info.price}</strong>
          </div>
          <div>
            Discount Percent: <strong>{info.discountPercent}`%</strong>
          </div>
          <div>
            Category: <strong>{info.subCategory.replace('-', ' ')}</strong>
          </div>
          <div>
            Shop Name: <strong>{info.shopName}</strong>{' '}
          </div>
        </div>
      );
    },
  },

  {
    title: 'Variation Info',
    dataIndex: 'selectedVariations',
    render: selectedVariations =>
      selectedVariations.map(selectedVariation => (
        <div style={{ ...margin.mb10, border: '1px solid green', padding: 5 }}>
          <div>
            Color: <strong>{selectedVariation.color}</strong>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            Sizes:
            {selectedVariation.sizes.map(size => {
              return (
                <div style={{ margin: '0 0 10px 10px' }}>
                  <div style={margin.mb5}>
                    <strong>
                      {size.name} ({size.quantity}),
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )),
  },

  {
    title: 'Qty',
    dataIndex: 'quantity',
  },

  {
    title: 'Sub Total',
    dataIndex: 'subTotal',
    render: subTotal => `₹ ${subTotal}`,
  },
];

export { orderProduct };
