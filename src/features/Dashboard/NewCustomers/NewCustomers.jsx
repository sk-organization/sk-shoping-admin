import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const NewCustomersColumn = (
  <table>
    <tr>
      <th>S.N</th>
      <th>Name</th>
      <th>Phone</th>
      <th>City</th>
      <th>Address</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Ramesh Yadav</td>
      <td>9815756398</td>
      <td>Butwal</td>
      <td>Traffic Chowk, 273305</td>
    </tr>
  </table>
);

const NewCustomers = () => {
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={['1']} onChange={callback}>
        <Panel header="New Customer(s)" key="1">
          {NewCustomersColumn}
        </Panel>
      </Collapse>
    </div>
  );
};

export default NewCustomers;
