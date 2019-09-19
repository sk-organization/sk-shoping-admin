/* eslint-disable import/no-duplicates */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Row, Col, Card, Icon, Progress } from 'antd';

const Graph = () => {
  return (
    <div>
      <Row gutter={10}>
        <Col span={6}>
          <Card hoverable bordered={false} style={{ width: 250, height: 250 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit', fontSize: 14 }}>
                      Total sales
                    </font>
                  </font>
                </span>
                <div
                  style={{
                    lineHeight: -1,
                    cursor: 'pointer',
                  }}
                >
                  <Icon title="Sales Indicator" type="info-circle" />
                </div>
              </div>

              <div>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <h1 style={{ verticalAlign: 'inherit', marginTop: 10 }}>
                      $ 126,560
                    </h1>
                  </font>
                </span>
              </div>
              <br />
              <div>
                <span>20% year-on-year</span>
                <Icon
                  style={{ color: 'red', marginLeft: 10 }}
                  type="caret-up"
                />
                <br />
                <span>18% year-on-year</span>
                <Icon
                  style={{ color: 'green', marginLeft: 10 }}
                  type="caret-down"
                />
              </div>
              <br />
              <hr />
              <div>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <span style={{ marginRight: 10 }}>Daily Sales</span>
                    <strong>$ 126,560</strong>
                  </font>
                </span>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card hoverable border={false} style={{ width: 250, height: 250 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit', fontSize: 14 }}>
                      Views
                    </font>
                  </font>
                </span>
                <div
                  style={{
                    lineHeight: -1,
                    cursor: 'pointer',
                  }}
                >
                  <Icon title="Sales Indicator" type="info-circle" />
                </div>
              </div>

              <div>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <h1 style={{ verticalAlign: 'inherit', marginTop: 10 }}>
                      $ 126,560
                    </h1>
                  </font>
                </span>
              </div>
              <br />

              <Line
                options={{
                  responsive: true,
                }}
                data={{
                  labels: ['1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      label: 'Line Charts',
                      pointBackgroundColor: '#9763e4',
                      borderColor: '#9763e4',
                      hoverBackgroundColor: '#9763e4',
                      pointBorderColor: '#9763e4',
                      data: [500, 750, 1850, 1380, 1150, 3050],
                    },
                  ],
                }}
              />
              <hr />
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card hoverable style={{ width: 250, height: 250 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit', fontSize: 14 }}>
                      Number of Payments
                    </font>
                  </font>
                </span>
                <div
                  style={{
                    lineHeight: -1,
                    cursor: 'pointer',
                  }}
                >
                  <Icon title="Sales Indicator" type="info-circle" />
                </div>
              </div>

              <div>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <h1 style={{ verticalAlign: 'inherit', marginTop: 10 }}>
                      $ 126,560
                    </h1>
                  </font>
                </span>
              </div>
              <br />

              <Bar
                options={{
                  responsive: true,
                }}
                data={{
                  labels: ['1', '2', '3', '4', '5', '6'],
                  datasets: [
                    {
                      label: 'Bar Graph',
                      backgroundColor: '#9763e4',
                      borderColor: '#9763e4',
                      hoverBackgroundColor: '#9763e4',
                      pointBorderColor: '#9763e4',
                      data: [40, 120, 90, 190, 130, 250],
                    },
                  ],
                }}
              />
              <hr />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable border={false} style={{ width: 250, height: 250 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit', fontSize: 14 }}>
                      Total sales
                    </font>
                  </font>
                </span>
                <div
                  style={{
                    lineHeight: -1,
                    cursor: 'pointer',
                  }}
                >
                  <Icon title="Sales Indicator" type="info-circle" />
                </div>
              </div>

              <div>
                <span>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <h1 style={{ verticalAlign: 'inherit', marginTop: 10 }}>
                      $ 126,560
                    </h1>
                  </font>
                </span>
              </div>
              <br />

              <div>
                <Line
                  options={{
                    responsive: true,
                  }}
                  data={{
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [
                      {
                        label: 'Line Charts',
                        backgroundColor: 'rgba(255, 0, 255, 0.75)',
                        data: [1, 20, 10, 60, 30, 100],
                      },
                    ],
                  }}
                />
              </div>
              <hr />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Graph;
