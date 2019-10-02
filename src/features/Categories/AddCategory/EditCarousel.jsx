/* eslint-disable no-console */
import React from 'react';
import { Button, message, Row, Col, notification } from 'antd';
import { navigate } from '@reach/router';
import { Field, Formik } from 'formik';
import gql from 'graphql-tag';
import axios from 'axios';
import { Query } from 'react-apollo';
import TextInput from '../../includes/Form/TextInput';
import FileInput from '../../includes/Form/FileInput';
import client from '../../../app/config/apollo';
import { IMAGE_UPLOAD_HOST } from '../../../app/config/constants';
import { margin } from '../../../styles';
import SelectInput from '../../includes/Form/Select';

const goBack = () => window.history.back();

const fetchCarouselName = gql`
  query {
    carousels {
      id
      image
      index
      show
      tag {
        id
        name
      }
    }
  }
`;
console.log(fetchCarouselName);
const EditCarousel = () => {
  // const addCarousel = async values => {
  //   const formData = new FormData();
  //   formData.append('name', values.name);
  //   formData.append('path', '/edit-carousel');
  //   formData.append('image', values.image);
  //   try {
  //     const { data: imagePath } = await axios.post(
  //       `${IMAGE_UPLOAD_HOST}/upload`,
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           'Access-Control-Allow-Origin': '*',
  //         },
  //       },
  //     );

  //     await client.mutate({
  //       mutation: gql`
  //         mutation($name: String!, $image: String!) {
  //           createCategory(data: { name: $name, image: $image }) {
  //             id
  //           }
  //         }
  //       `,
  //       variables: {
  //         name: values.name,
  //         image: `/edit-carousel/${imagePath}`,
  //       },
  //     });
  //     notification.success({
  //       placement: 'topRight',
  //       message: `${values.name} carousel updated!`,
  //     });
  //     navigate('/edit-carousel');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Row>
      <Col span={7} />
      <Col span={10}>
        <Formik enableReinitialize>
          {({ handleSubmit }) => (
            <React.Fragment>
              <strong>Tags: </strong>
              <Query query={fetchCarouselName}>
                {({ loading, error, data }) => {
                  if (loading) return <span>loading...</span>;
                  if (error) {
                    return <span>error ...</span>;
                  }
                  const { carousel } = data;
                  return (
                    <Field
                      name="carousel"
                      mode="multiple"
                      placeholder="Select Carousel Tags"
                      options={carousel.map(carousel => ({
                        label: carousel.name,
                        id: carousel.id,
                        key: carousel.tag.name,
                      }))}
                      labelInValue
                      component={SelectInput}
                    />
                  );
                }}
              </Query>
              <strong>Edit Carousel Image</strong>
              <Field
                name="image"
                listType="picture-card"
                boxWidth="340px"
                maxSize={1 * 1024 * 1024}
                onError={error => message.error(error)}
                fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
                multiple={false}
                component={FileInput}
              />

              <Button style={margin.mr10} type="primary" onClick={handleSubmit}>
                Update Carousel
              </Button>
              <Button type="default" onClick={goBack}>
                Back
              </Button>
            </React.Fragment>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default EditCarousel;
