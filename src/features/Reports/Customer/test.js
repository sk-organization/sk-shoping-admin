import React from 'react';

import { Card, Col, Row, Icon, Button } from 'antd';

const { Meta } = Card;

const CustomerCard = () => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <React.Fragment>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                </React.Fragment>
              }
            >
              <Row gutter={15}>
                <Col span={20}>
                  <Meta
                    title={<span>Mike Henry</span>}
                    description={
                      <div>
                        <span>mike@gmail.com</span>
                        <br />
                        <span>9817548658</span>
                      </div>
                    }
                  />
                </Col>
                <Col span={4}>
                  <span
                    style={{
                      color: 'green',
                      fontSize: 25,
                      textAlign: 'right',
                    }}
                  >
                    <Icon type="tag" />
                  </span>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12} />
                <Col span={12}>
                  <div>
                    <Button size="small" type="primary">
                      send message
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>

        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>

        <Col span={8}>
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerCard;
