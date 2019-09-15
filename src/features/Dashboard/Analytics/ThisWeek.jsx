import React from 'react';
import { Bar } from 'react-chartjs-2';

const ThisWeek = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
          datasets: [
            {
              backgroundColor: '#9763e4',
              label: 'Views',
              data: [10, 40, 50, 80, 120, 140],
            },
          ],
        }}
      />
    </div>
  );
};

export default ThisWeek;
