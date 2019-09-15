import React from 'react';
import { Card, Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  return (
    <div>
      <Row gutter={10}>
        <Col span={6}>
          <div>
            <Card style={{ width: 250, height: 250 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <Card style={{ width: 250, height: 250 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <Card style={{ width: 250, height: 250 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <div>
            <Card style={{ width: 250, height: 250 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </Col>
      </Row>
      <br />
      <div>
        <Row>
          <Col>
            <div>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
