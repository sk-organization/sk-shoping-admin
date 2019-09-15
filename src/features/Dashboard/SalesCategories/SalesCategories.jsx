import React from 'react';
import { Card } from 'antd';
import { Doughnut } from 'react-chartjs-2';

const SalesCategories = () => {
  return (
    <div>
      <Card title="Sales Categories">
        <Doughnut
          data={{
            datasets: [
              {
                data: [100, 300, 500, 650, 900],
                backgroundColor: [
                  '#ff6384',
                  '#36a2eb',
                  '#ffcd56',
                  '#D01F39',
                  '#EF626C',
                  '#441678',
                  '#FEC300',
                  '#70EE9C',
                  '#EF9118',
                  '#51A3A3',
                ],
              },
            ],
            labels: ['Kurti', 'Saree', 'Lehenga', 'Suit', 'Shoes'],
          }}
        />
      </Card>
    </div>
  );
};

export default SalesCategories;
