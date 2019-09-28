import React from 'react';
import { Table, Card, Statistic, Row, Col, Icon } from 'antd';
import { Line } from 'react-chartjs-2';
import { navigate } from '@reach/router';
import ordersColumns from './config';

const ordersData = [
  {
    id: 'sad7d5f5f775sad77fsd',
    orderDate: '21/09/2019',
    subTotal: '$26.50',
    discount: '$0.00',
    shipping: 'free',
    vat: '18%',
    total: '$31.27',
  },
];

const OrdersReport = () => {
  return (
    <div>
      <h3>Orders Summary</h3>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={10}>
          <Col span={5}>
            <Card>
              <Statistic
                title="Total Orders"
                value={11422}
                // valueStyle={{ color: '#3f8500' }}
                // prefix={<Icon type="arrow-up" />}
                // suffix="%"
              />
            </Card>
          </Col>

          <Col span={5}>
            <Card>
              <Statistic
                title="Units Sold"
                value={11422}
                // valueStyle={{ color: '#3f8500' }}
                // prefix={<Icon type="arrow-up" />}
                // suffix="%"
              />
            </Card>
          </Col>

          <Col span={5}>
            <Card>
              <Statistic
                title="Revenue"
                value={11422}
                // valueStyle={{ color: '#3f8500' }}
                // prefix={<Icon type="arrow-up" />}
                // suffix="%"
              />
            </Card>
          </Col>

          <Col span={5}>
            <Card>
              <Statistic
                title="Orders Discounted"
                value={11422}
                // precision={2}
                // valueStyle={{ color: '#3f8500' }}
                // prefix={<Icon type="arrow-up" />}
                // suffix="%"
              />
            </Card>
          </Col>

          <Col span={4}>
            <Card>
              <Statistic
                title="AOV"
                value={11422}
                // precision={2}
                // valueStyle={{ color: '#3f8600' }}
                // prefix={<Icon type="arrow-up" />}
                // suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <div>
        <h2>Order Over Time Graph</h2>
        <Line
          width="100"
          height="30"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            datasets: [
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'purple',
                borderColor: 'purple',
                hoverBackgroundColor: 'purple',
                pointBorderColor: 'purple',
                label: 'Total Order',
                data: [10, 160, 50, 250, 100, 380],
              },

              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'orange',
                borderColor: 'orange',
                hoverBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                label: 'Added',
                data: [60, 80, 190, 120, 300, 150],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'purple',
                borderColor: 'purple',
                hoverBackgroundColor: 'purple',
                pointBorderColor: 'purple',
                label: 'Visited',
                data: [120, 200, 190, 250, 450, 500],
              },

              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'orange',
                borderColor: 'orange',
                hoverBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                label: 'Added',
                data: [50, 190, 150, 100, 90, 180],
              },
            ],
          }}
        />
      </div>
      <br />
      <br />
      <Table
        onRowClick={() => navigate('/orders/order/d24d9f9956df5f')}
        dataSource={ordersData}
        columns={ordersColumns}
      />
    </div>
  );
};

export default OrdersReport;
