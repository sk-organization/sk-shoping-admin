import React from 'react';
import { Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2';

const Viewed = () => {
  return (
    <div>
      <Row>
        <Col span={14}>
          <Bar
            options={{
              reponsive: true,
            }}
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
              datasets: [
                {
                  backgroundColor: '#9763e4',
                  label: 'Views',
                  data: [90, 200, 150, 200, 150, 350],
                },
              ],
            }}
          />
        </Col>
        <Col span={8}>
          <h2>Something</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Viewed;
