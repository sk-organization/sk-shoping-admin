import React from 'react';
import { Line } from 'react-chartjs-2';

const WishList = ({ data }) => {
  return (
    <div>
      <h2>WishList</h2>
      <Line
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'April', 'June'],
          datasets: [
            {
              backgroundColor: 'transparent',
              pointBackgroundColor: '#03c2fc',
              borderColor: '#03c2fc',
              hoverBackgroundColor: '#03c2fc',
              pointBorderColor: '#03c2fc',
              label: 'WishList Graph ',
              data: [10, 20, 50, 80, 100]
            }
          ]
        }}
      />
    </div>
  );
};
export default WishList;
