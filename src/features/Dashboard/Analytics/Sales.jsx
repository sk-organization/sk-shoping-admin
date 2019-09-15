import React from 'react';
import { Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';

const Sales = () => {
  return (
    <div>
      <Row gutter={40}>
        <Col span={14}>
          <Bar
            options={{
              responsive: true,
            }}
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
              datasets: [
                {
                  backgroundColor: 'blue',
                  pointBackgroundColor: '#9763e4',
                  borderColor: '#9763e4',
                  hoverBackgroundColor: '#9763e4',
                  pointBorderColor: '#9763e4',
                  data: [90, 200, 150, 280, 800, 450],
                },
              ],
            }}
          />
        </Col>
        <Col span={10}>
          <h4>Stores Sales Ranking</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Sales;
