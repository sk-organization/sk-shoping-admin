import React from 'react';
import { Field, Formik } from 'formik';
import { Row, Col, Card, Table, DatePicker } from 'antd';
import { Button } from 'semantic-ui-react';
import { reportsConfig } from './config';
import SelectInput from '../includes/Form/Select';

const dataSource = [
  {
    sn: '1',
    name: 'Jessy Holmes',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '2',
    name: 'Mike Henry',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '3',
    name: 'john Doe',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '4',
    name: 'sijan',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '5',
    name: 'peecha',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '6',
    name: 'ramesh yadav',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
  {
    sn: '7',
    name: 'othey',
    email: 'some@gmail.com',
    date: '02-05-2019',
    products: '2',
    orders: '2',
    total: '5400',
  },
];

const reportsOptions = [
  'Customers Order Report',
  'Products Purcahsed Report',
  'Products Stock Reports',
  'Sales Reports',
  'Coupan Reports',
  'Low Stock Products',
  'Out Of Stock Products',
  'Products Viewed',
];

const OrderStatus = ['PENDING', 'COMPLETED', 'CANCELLED', 'ON HOLD', 'REFUND'];
const GroupBy = ['Days', 'Weeks', 'Months', 'Years'];

const Reports = () => {
  return (
    <div>
      <h2>Reports</h2>
      <Row gutter={16}>
        <Col span={18}>
          <Table dataSource={dataSource} columns={reportsConfig} />
        </Col>
        <Col span={6}>
          <Card style={{ width: 250 }}>
            <h2>Filters</h2>
            <Formik enableReinitialize>
              <React.Fragment>
                <strong>Report Type </strong>
                <Field
                  name="name"
                  placeholder="Customers Order Report"
                  options={reportsOptions}
                  component={SelectInput}
                />

                <strong>Start Date</strong>
                <DatePicker />
                <br />
                <br />

                <strong>End Date</strong>
                <DatePicker />
                <br />
                <br />

                <strong>Order Status</strong>
                <Field
                  name="orderStatus"
                  placeholder="Please Select"
                  options={OrderStatus}
                  component={SelectInput}
                />

                <strong>Grouped By</strong>
                <Field
                  name="orderStatus"
                  placeholder="Please Select"
                  options={GroupBy}
                  component={SelectInput}
                />

                <div style={{ textAlign: 'right' }}>
                  <Button type="primary">Filter</Button>
                </div>
              </React.Fragment>
            </Formik>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reports;
