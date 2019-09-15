import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const LatestReviewsColumn = (
  <table>
    <tr>
      <th>Product</th>
      <th>Customer</th>
      <th>Rating</th>
    </tr>
    <tr>
      <td>beauty net yellow saree</td>
      <td>Ramesh Yadav</td>
      <td>6</td>
    </tr>
  </table>
);

const LatestReviews = () => {
  return (
    <div>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Latest Reviews" key="1">
          {LatestReviewsColumn}
        </Panel>
      </Collapse>
    </div>
  );
};

export default LatestReviews;
