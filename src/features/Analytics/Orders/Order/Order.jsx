import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'semantic-ui-react';

const extra = (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <strong>Order Total</strong>
    <span style={{ color: 'green' }}>$110.00</span>
  </div>
);

const OrderReport = () => {
  return (
    <div>
      <div>
        <h2>Orders Over Time Graph</h2>
        <Line
          width="100"
          height="30"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            datasets: [
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'purple',
                borderColor: 'purple',
                hoverBackgroundColor: 'purple',
                pointBorderColor: 'purple',
                label: 'Visited',
                data: [10, 160, 50, 250, 100, 380],
              },

              {
                backgroundColor: 'transparent',
                pointBackgroundColor: 'orange',
                borderColor: 'orange',
                hoverBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                label: 'Added',
                data: [60, 80, 190, 120, 300, 150],
              },
            ],
          }}
        />
      </div>
      <br />
      <br />
      <div>
        <Card
          image="images/avatar/large/elliot.jpg"
          header={<span style={{ fontSize: 16 }}>ORDER INFO</span>}
          description={
            <div>
              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Order#</span>
                <span>166</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Placed By</span>
                <span>Mike Henry</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Placed On</span>
                <span>Sep 21, 2019 at 10.40 pm</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Items Ordered</span>
                <span>5</span>
              </div>
              <br />
              <hr />
              <span style={{ fontSize: 16 }}>ORDER INFO</span>
              <br />
              <br />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Item(s)Subtotal</span>
                <span>$110.00</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Discount</span>
                <span>$0.00</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>Shipping</span>

                <span>$0.00</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>VAT</span>

                <span>$0.00</span>
              </div>
            </div>
          }
          extra={extra}
        />
      </div>
    </div>
  );
};

export default OrderReport;
