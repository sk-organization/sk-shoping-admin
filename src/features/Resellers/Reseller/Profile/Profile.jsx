import React from 'react';
import { Col, Row, Avatar } from 'antd';
import { IMAGE_HOST } from '../../../../app/config/constants';

const styles = {
  color: '#03c2fc',
  fontWeight: 'bold',
  fontSize: '16px',
  display: 'block',
  lineHeight: 1.8,
};

const Profile = props => {
  const { reseller } = props;
  if (!reseller.user) return <p>Loading..</p>;
  const { user } = reseller;
  const { bankDetails } = reseller;
  const imageSource = reseller.user ? IMAGE_HOST + reseller.user.image : '';
  return (
    <Row gutter={10} style={{ marginTop: 20 }}>
      <Col span={8}>
        <Avatar
          size="large"
          style={{ height: 150, width: 150 }}
          src={imageSource}
        />
      </Col>
      <Col span={16}>
        <Row>
          <Col span={12}>
            <h4>Name:</h4>
            <h4>Phone:</h4>
            <h4>City:</h4>
            <h4>Bank Name:</h4>
            <h4>Account Number:</h4>
            <h4>IFSC Code:</h4>
          </Col>
          <Col span={12}>
            <span style={styles}>{user.name}</span>
            <span style={styles}>{user.phone}</span>
            <span style={styles}>{user.location.city}</span>
            <span style={styles}>{bankDetails.bankName}</span>
            <span style={styles}>{bankDetails.accountNumber}</span>
            <span style={styles}>{bankDetails.IFSC_CODE}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
