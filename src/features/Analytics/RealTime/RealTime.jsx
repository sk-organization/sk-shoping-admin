import React from 'react';
import { Statistic, Row, Col, Card } from 'antd';

const RealTimeReports = () => {
  return (
    <div>
      <h2>STATISTICS</h2>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={20}>
          <Col span={6}>
            <Card>
              <Statistic title="Revenue" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Items Sold" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Orders" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Visits" value={112893} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RealTimeReports;
