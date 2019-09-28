import React from 'react';
import { Card } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';

const extra = (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <strong>Order Total</strong>
    <span style={{ color: 'green' }}>$110.00</span>
  </div>
);

const CustomerReport = () => {
  return (
    <div>
      <div>
        <Card.Group itemsPerRow={5}>
          <Card color="green" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Total Spent</strong>
            <h2>$34.98</h2>
          </Card>
          <Card color="red" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Orders</strong>
            <h2>2</h2>
          </Card>
          <Card color="green" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Last Purchase</strong>
            <h2>
              45 <small>days ago</small>{' '}
            </h2>
          </Card>
          <Card color="red" style={{ textAlign: 'center', padding: 10 }}>
            <strong>AOV</strong>
            <h2>$17.49</h2>
          </Card>
          <Card color="red" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Item Price Range</strong>
            <h2>$8 - $9</h2>
          </Card>
        </Card.Group>
      </div>
      <br />
      <br />
      <div>
        <h2>Purchase Funnel Bar Graph</h2>
        This content should be displayed in graph
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          <Card color="purple" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Visited</strong>
            <h2>65,285</h2>
          </Card>
          <Card color="blue" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Shopped</strong>
            <h2>58,076</h2>
          </Card>
          <Card color="blue" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Add to Cart</strong>
            <h2>4323</h2>
          </Card>
          <Card color="green" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Purchased</strong>
            <h2>1639</h2>
          </Card>
        </Card.Group>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2>Purchase Funnel Over Time Graph</h2>
        <Line
          width="100"
          height="30"
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            datasets: [
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#9b59b6',
                borderColor: '#9b59b6',
                hoverBackgroundColor: '#9b59b6',
                pointBorderColor: '#9b59b6',
                label: 'Visited',
                data: [10, 20, 50, 80, 100, 120],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#2980b9',
                borderColor: '#2980b9',
                hoverBackgroundColor: '#2980b9',
                pointBorderColor: '#2980b9',
                label: 'Shopped',
                data: [30, 40, 90, 130, 190, 250],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#48dbfb',
                borderColor: '#48dbfb',
                hoverBackgroundColor: '#48dbfb',
                pointBorderColor: '#48dbfb',
                label: 'Added',
                data: [10, 80, 50, 120, 170, 200],
              },
              {
                backgroundColor: 'transparent',
                pointBackgroundColor: '#2ecc71',
                borderColor: '#2ecc71',
                hoverBackgroundColor: '#2ecc71',
                pointBorderColor: '#2ecc71',
                label: 'Purchased',
                data: [30, 50, 70, 90, 180, 290],
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

export default CustomerReport;
