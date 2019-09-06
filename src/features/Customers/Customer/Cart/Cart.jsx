import React from 'react';
import { Table } from 'antd';
import { useQuery } from '@apollo/react-hooks';

import { query } from '../../graphql';
import client from '../../../../app/config/apollo';
import { cartsTable } from '../config';

const Cart = ({ status, userId }) => {
  const { data, loading, error } = useQuery(query.cart, {
    pollInterval: 500,
    variables: {
      where: {
        status,
        orderBy: {
          id: userId,
        },
      },
    },
    client,
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  const CartMapped = data.carts.map((cart, index) => {
    return {
      ...cart,
      sn: index + 1,
      subTotal: cart.total,
      totalProduct: cart.totalProducts,
      meta: {
        name: cart.product.name,
        image: cart.product.image,
        price: cart.product.price,
      },
    };
  });

  return (
    <div>
      <Table columns={cartsTable} dataSource={CartMapped} />
    </div>
  );
};

export default Cart;
