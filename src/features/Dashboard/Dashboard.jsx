import React, { Fragment } from 'react';
import { Card, Row, Col, Tabs, Icon, DatePicker, Breadcrumb } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

import Graph from './GraphCard/Graph';
import Sales from './Analytics/Sales';
import Viewed from './Analytics/Views';

import NewOrders from './NewOrders/NewOrders';
import GoalCompletion from './GoalCompletion/GoalCompletion';
import NewCustomers from './NewCustomers/NewCustomers';
import RecentlyAddedProducts from './RecentAddedProducts./RecentlyAddedProducts';
import LatestSearchTerm from './LatestSearchTerms/LatestSearchTerms';
import LatestReviews from './LatestSearchTerms/LatestReviews/LatestReviews';
import PopularSearches from './PopularSearches/PopularSearches';
import SalesCategories from './SalesCategories/SalesCategories';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

const dateFormat = 'YY/MM/DD';

// eslint-disable-next-line arrow-body-style
const Dashboard = () => {
  return (
    <div>
      <div style={{ background: '#f0f2f5', padding: '10px' }}>
        <Graph />
        <div style={{ background: '#f0f2f5', marginTop: 10 }}>
          <Card>
            <h3>
              <Icon type="bar-chart" /> Sales Analytics
            </h3>
            <div>
              <Tabs
                defaultActiveKey="1"
                tabBarExtraContent={
                  <Fragment>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItem: 'center',
                        marginTop: 5,
                      }}
                    >
                      <div
                        style={{
                          marginRight: 24,
                          fontSize: 14,
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span style={{ margin: '0 10px' }}>Today</span>
                        <span style={{ margin: '0 10px' }}>This Week</span>
                        <span style={{ margin: '0 10px' }}>This Month</span>
                        <span style={{ margin: '0 10px' }}>All Year</span>
                      </div>

                      <div style={{ width: 256 }}>
                        <RangePicker
                          defaultValue={[
                            moment('2015/01/01', dateFormat),
                            moment('2015/01/01', dateFormat),
                          ]}
                          format={dateFormat}
                        />
                      </div>
                    </div>
                  </Fragment>
                }
              >
                <TabPane
                  tab={<span style={{ fontSize: 18 }}>Sales</span>}
                  key="1"
                >
                  <Sales />
                </TabPane>

                <TabPane
                  tab={<span style={{ fontSize: 18 }}>Views</span>}
                  key="2"
                >
                  <Viewed />
                </TabPane>
              </Tabs>
            </div>
          </Card>
        </div>

        <div style={{ marginTop: 10 }}>
          <Row gutter={10}>
            <Col span={16}>
              <NewOrders />
            </Col>
            <Col span={8}>
              <GoalCompletion />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: 10 }}>
          <Row gutter={10}>
            <Col span={16}>
              <NewCustomers />
            </Col>
            <Col span={8}>
              <LatestSearchTerm />
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: 10 }}>
          <Row gutter={10}>
            <Col span={16}>
              <RecentlyAddedProducts />
            </Col>

            <Col span={8}>
              <LatestReviews />
            </Col>
          </Row>
        </div>

        <div style={{ background: '#f0f2f5', marginTop: 10 }}>
          <Row gutter={10}>
            <Col span={12}>
              <PopularSearches />
            </Col>
            <Col span={12}>
              <SalesCategories />
            </Col>
          </Row>
        </div>
        <div>
          <Card style={{ marginTop: 10 }}>
            <Tabs>
              <TabPane tab={<span>Frenchise 1</span>} key="1">
                Frenchise 1
              </TabPane>

              <TabPane tab={<span>Frenchise 2</span>} key="2">
                Frenchise 2
              </TabPane>

              <TabPane tab={<span>Frenchise 3</span>} key="3">
                Frenchise 3
              </TabPane>

              <TabPane tab={<span>Frenchise 4</span>} key="4">
                Frenchise 4
              </TabPane>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
