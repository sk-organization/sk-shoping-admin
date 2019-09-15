import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const LatestSearchColumn = (
  <table>
    <tr>
      <th>Keyword</th>
      <th>Resuts</th>
      <th>Hits</th>
    </tr>
    <tr>
      <td>indo western kurti</td>
      <td>20</td>
      <td>80</td>
    </tr>
  </table>
);

const LatestSearchTerm = () => {
  return (
    <div>
      <Collapse bordered={false} defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Latest Search Term" key="1">
          {LatestSearchColumn}
        </Panel>
      </Collapse>
    </div>
  );
};

export default LatestSearchTerm;
