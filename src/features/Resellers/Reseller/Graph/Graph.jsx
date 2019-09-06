/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Query } from 'react-apollo';
import { Line } from 'react-chartjs-2';
import { FETCH_SOLD_DATES } from '../../Queries/Queries';

const monthMapping = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
};

const months = ['January', 'February', 'March', 'April', 'May', 'June'];

const Graph = props => {
  if (!props.id) return <p>loading graph...</p>;
  return (
    <Query
      query={FETCH_SOLD_DATES}
      variables={{ id: props.id }}
      pollInterval={100}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>loading...</p>;
        if (error) {
          return <p>error...</p>;
        }
        const mapping = {};
        const dates = data.soldProducts.map(t => t.soldDate);
        dates.forEach(date => {
          let month = new Date(date).getMonth() + 1;
          month = monthMapping[month];
          if (mapping[month]) {
            mapping[month] += 1;
          } else {
            mapping[month] = 1;
          }
        });

        const barData = [];

        // const barData = Object.keys(mapping).map(map => mapping[map]);
        months.forEach(month => {
          const val = mapping[month];
          if (val) {
            barData.push(mapping[month]);
          } else {
            barData.push(0);
          }
        });

        return (
          <Line
            height={15}
            width={30}
            options={{
              scales: { yAxes: [{ ticks: { min: 0, stepSize: 1 } }] },
            }}
            data={{
              labels: months,
              datasets: [
                {
                  backgroundColor: 'transparent',
                  pointBackgroundColor: '#03c2fc',
                  borderColor: '#03c2fc',
                  hoverBackgroundColor: '#03c2fc',
                  pointBorderColor: '#03c2fc',
                  label: 'Sold Products',
                  data: barData,
                },
              ],
            }}
          />
        );
      }}
    </Query>
  );
};

export default Graph;
