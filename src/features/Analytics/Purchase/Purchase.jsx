import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { Line } from 'react-chartjs-2';

const PurchaseFunnel = () => {
  return (
    <div>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <h2>Purchase Funnel Bar Graph</h2>
        This content should be displayed in graph
        <br />
        <br />
        <Row gutter={20}>
          <Col span={6}>
            <Card>
              <Statistic title="Visited" value={11422} />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic title="Shopped" value={11422} />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic title="Added" value={11422} />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic title="Purchased" value={11422} />
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <div>
        <h2>Purchase Funnel Over Time Graph</h2>
        <Line
          width="100"
          height="30"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            datasets: [
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#9b59b6',
                borderColor: '#9b59b6',
                hoverBackgroundColor: '#9b59b6',
                pointBorderColor: '#9b59b6',
                label: 'Visited',
                data: [10, 20, 50, 80, 100, 120],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#2980b9',
                borderColor: '#2980b9',
                hoverBackgroundColor: '#2980b9',
                pointBorderColor: '#2980b9',
                label: 'Shopped',
                data: [30, 40, 90, 130, 190, 250],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#48dbfb',
                borderColor: '#48dbfb',
                hoverBackgroundColor: '#48dbfb',
                pointBorderColor: '#48dbfb',
                label: 'Added',
                data: [10, 80, 50, 120, 170, 200],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#2ecc71',
                borderColor: '#2ecc71',
                hoverBackgroundColor: '#2ecc71',
                pointBorderColor: '#2ecc71',
                label: 'Purchased',
                data: [30, 50, 70, 90, 180, 290],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default PurchaseFunnel;
