import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const NewOrdersColumn = (
  <table>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Status</th>
      <th>Total</th>
    </tr>
    <tr>
      <td>365</td>
      <td>Marvel</td>
      <td>PEDNING</td>
      <td>850</td>
    </tr>
  </table>
);

const NewOrders = () => {
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={['1']} onChange={callback}>
        <Panel header="New Orders" key="1">
          {NewOrdersColumn}
        </Panel>
      </Collapse>
    </div>
  );
};

export default NewOrders;
