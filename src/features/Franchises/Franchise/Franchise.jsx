import React from 'react';
import { Row, Col, Tag, Table, Avatar } from 'antd';
import { Line } from 'react-chartjs-2';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useQuery } from '@apollo/react-hooks';
import client from '../../../app/config/apollo';
import { query } from '../graphql';
// import Products from '../../Products/Products';
import BasicInfo from './BasicInfo';
import { IMAGE_HOST } from '../../../app/config/constants';
import LocationInfo from './LocationInfo';
import SellerInfo from './SellerInfo';

const { google } = 'dfs';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const Frenchise = props => {
  const { id } = props;

  const { error, loading, data } = useQuery(query.franchise, {
    client,
    variables: {
      id,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Server Error...</div>;
  const { franchise } = data;
  console.log(data);

  // const franchiseMapped = franchise.map((fUser, index) => ({
  //   ...fUser,
  //   sn: index + 1,
  //   franchiseInfo: {
  //     name: fUser.user.name,
  //     email: fUser.user.email,
  //     image: fUser.user.image,
  //   },
  // }));

  return (
    <div>
      <h3>Frenchise</h3>
      <Row>
        <Col span={14}>
          <p>Geo Location Map</p>
          <Map
            google={google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
        </Col>
        <Col span={10}>
          <Line
            data={{
              labels: [
                'Jan',
                'Feb',
                'Mar',
                'April',
                'June',
                'July',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              datasets: [
                {
                  backgroundColor: 'transparent',
                  pointBackgroundColor: '#03c2fc',
                  borderColor: '#03c2fc',
                  hoverBackgroundColor: '#03c2fc',
                  pointBorderColor: '#03c2fc',
                  label: 'Frenchise Sold',
                  data: [5, 25, 20, 80, 100, 125, 50, 90, 150, 195, 230, 255],
                },
                {
                  backgroundColor: 'transparent',
                  pointBackgroundColor: '#722ed1',
                  borderColor: '#722ed1',
                  hoverBackgroundColor: '#722ed1',
                  pointBorderColor: '#722ed1',
                  label: 'Total Sold',
                  data: [0, 40, 30, 70, 120, 150, 90, 125, 160, 190, 205, 280],
                },
              ],
            }}
          />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={6}>
          <BasicInfo
            basicInfo={franchise.user}
            bankDetails={franchise.bankDetails}
          />
        </Col>
        <Col span={6}>
          <SellerInfo sellerInfo={franchise} />
        </Col>
        <Col span={6}>
          <LocationInfo LocationInfo={franchise.user.location} />
        </Col>
        <Col span={6}>
          <Avatar
            size={150}
            shape="circle"
            src={IMAGE_HOST + franchise.user.image}
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col span={6} />
        <Col span={6}>
          <Tag color="blue" style={{ fontSize: 30, padding: 5 }}>
            <span>420k</span>
          </Tag>
          <br />
          <br />
          <strong>Frenchise Sold</strong>
        </Col>
        <Col span={6}>
          <Tag color="purple" style={{ fontSize: 30, padding: 5 }}>
            <span>800k</span>
          </Tag>
          <br />
          <br />
          <strong>Total Sold</strong>
        </Col>
        <Col span={6} />
      </Row>
      <br />
      <br />

      {/* <Products where={{ franchise: { id: franchise.id } }} /> */}
    </div>
  );
};

export default Frenchise;
