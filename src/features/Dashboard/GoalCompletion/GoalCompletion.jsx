import React from 'react';
import { Collapse, Progress } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const GoalCompletion = () => {
  return (
    <div>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Goal Completion" key="1">
          <div>
            <span>
              Add Product to Cards
              <Progress percent={30} />
            </span>

            <span>
              Complete Orders
              <Progress percent={50} status="active" />
            </span>

            <span>
              Pending Orders
              <Progress percent={70} status="exception" />
            </span>
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default GoalCompletion;
