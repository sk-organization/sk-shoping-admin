import React from 'react';
import { Card } from 'semantic-ui-react';
import { Table } from 'antd';
import { navigate } from '@reach/router';
import customersColumns from './config';

const customersData = [
  {
    name: 'Junky Funky',
    email: 'junky@gmail.com',
    type: 'new or return',
    firstOrder: 'no',
    lastOrderDate: '21/09/2019',
    lastOrderAmount: '17.49',
    totalSpent: '34.98',
  },
];

const CustomersReport = () => {
  return (
    <div>
      <div>
        <h3>Customers Summary</h3>
        <Card.Group itemsPerRow={4}>
          <Card color="green" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Customers</strong>
            <h2>6</h2>
            <strong style={{ color: 'green', padding: 5 }}>+200%</strong>
          </Card>
          <Card color="red" style={{ textAlign: 'center', padding: 10 }}>
            <strong>New Customers</strong>
            <h2>2</h2>
            <strong style={{ color: 'red', padding: 5 }}>+1%</strong>
          </Card>
          <Card color="green" style={{ textAlign: 'center', padding: 10 }}>
            <strong>New</strong>
            <h2>33.33%</h2>
            <strong style={{ color: 'green', padding: 5 }}>-66.50%</strong>
          </Card>
          <Card color="red" style={{ textAlign: 'center', padding: 10 }}>
            <strong>Returning</strong>
            <h2>66.67%</h2>
            <strong style={{ color: 'red', padding: 5 }}>n/a</strong>
          </Card>
        </Card.Group>
      </div>
      <br />
      <br />
      <Table
        onRowClick={() => navigate('/customers/customer/df55df44df887d1')}
        dataSource={customersData}
        columns={customersColumns}
      />
    </div>
  );
};

export default CustomersReport;
