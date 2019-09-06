import React from 'react';
import { Card, Row, Col, Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

const Dashboard = () => {
  return (
    <div>
      <div style={{ background: '#ECECEC', padding: '20px' }}>
        <Row gutter={10}>
          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ height: 200 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ height: 200 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ height: 200 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col span={6}>
            <Card title="Card title" bordered={false} style={{ height: 200 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span style={{ fontSize: 20 }}>
                {/* <Icon type="apple" /> */}
                Sales
              </span>
            }
            key="1"
          >
            Tab 1
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontSize: 20 }}>
                {/* <Icon type="android" /> */}
                Views
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
