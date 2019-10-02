import React, { useState, useEffect } from 'react';
import { Table, Dropdown, Menu, Icon, Checkbox } from 'antd';
import { navigate } from '@reach/router';
import gql from 'graphql-tag';
import { query } from './graphql';
import { ordersTable } from './config';
import client from '../../app/config/apollo';

const DATA_PER_PAGE = 8;

const Orders = ({ where = {} }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({ pageSize: DATA_PER_PAGE });
  const [sortedInfo, setSortedInfo] = useState(null);
  const [orders, setOrders] = useState([]);
  const fetchTotal = async (where = {}) => {
    const { data } = await client.query({
      query: gql`
        query($where: OrderWhereInput) {
          totalOrders(where: $where)
        }
      `,
      variables: {
        where,
      },
    });
    setPagination({ ...pagination, total: data.totalOrders });
  };

  const fetchOrders = async (
    queryWhere = where || {},
    skip,
    first = DATA_PER_PAGE,
    orderBy = 'createdAt_DESC',
  ) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: query.orders,
        variables: {
          where: { ...where, ...queryWhere },
          first,
          skip,
          orderBy,
        },
      });
      setOrders(data.orders);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const handleTableChange = (paginationInfo, x, sorter) => {
    setPagination(paginationInfo);
    const skip = DATA_PER_PAGE * (paginationInfo.current - 1);
    setSortedInfo(sorter);

    if (sorter.columnKey === 'totalProducts') {
      if (sorter.order === 'ascend') {
        fetchOrders(where, skip, null, 'totalProducts_ASC');
        return fetchTotal(where);
      }
      fetchOrders(where, skip, null, 'totalProducts_DESC');
      return fetchTotal(where);
    }

    if (x.status) {
      fetchOrders({ ...where, status: x.status[0] }, skip);
      return fetchTotal({ ...where, status: x.status[0] });
    }
    console.log(sorter);
    fetchOrders(where, skip);
    fetchTotal(where);
  };

  useEffect(() => {
    fetchTotal();
    fetchOrders();
  }, []);

  if (error) return <div>Server Error...</div>;

  const ordersMapped = orders.map((order, index) => {
    const { createdAt, orderBy } = order;
    const { name, image } = orderBy;

    const addDays = (date, days) => {
      date.setDate(date.getDate() + days);
      return date;
    };

    return {
      ...order,
      sn: index + 1,
      actions: {
        id: order.id,
      },
      deliveryDate: addDays(new Date(order.createdAt), 6).toDateString(),
      image,
      customerName: name,
      orderDate: new Date(createdAt).toDateString(),
    };
  });

  // const handleChange5 = () => {
  //   if (DATA_PER_PAGE === '5') {
  //     pageSize = DATA_PER_PAGE;
  //   }
  // };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">5</a>
        <a href="#">10</a>
        <a href="#">20</a>
        <a href="#">30</a>
        <a href="#">40</a>
        <a href="#">50</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div
        style={{
          textAlign: 'right',
          marginBottom: 10,
          padding: 5,
          fontSize: 14,
        }}
      >
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            View 5 <Icon type="down" />
          </a>
        </Dropdown>
      </div>
      <Table
        pagination={{ ...pagination }}
        loading={loading}
        onRowClick={order => navigate(`/order/${order.id}`)}
        key={order => order.id}
        dataSource={ordersMapped}
        columns={ordersTable}
        onChange={handleTableChange}
      />
      {/* TODO: VIEW PAGE BY 6 */}
    </div>
  );
};

export default Orders;
