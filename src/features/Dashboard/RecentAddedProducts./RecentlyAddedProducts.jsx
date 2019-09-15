import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const RecentlyAddedProductColumn = (
  <table>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Seller</th>
      <th>Shop Name</th>
    </tr>
    <tr>
      <td>Image</td>
      <td>New Arrivals net soft chiffon saree</td>
      <td>2150</td>
      <td>Mike Henry</td>
      <td>mikeCollection</td>
    </tr>
  </table>
);

const RecentlyAddedProducts = () => {
  return (
    <div>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Recently Added Products" key="1">
          {RecentlyAddedProductColumn}
        </Panel>
      </Collapse>
    </div>
  );
};

export default RecentlyAddedProducts;
