/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Button, message, Row, Col, notification } from 'antd';
import { navigate } from '@reach/router';
import { Field, Formik } from 'formik';
import gql from 'graphql-tag';
import axios from 'axios';
import FileInput from '../../includes/Form/FileInput';
import client from '../../../app/config/apollo';
import { IMAGE_UPLOAD_HOST } from '../../../app/config/constants';
import { margin } from '../../../styles';
import SelectInput from '../../includes/Form/Select';
import { query } from '../graphql';

const goBack = () => window.history.back();

const AddCarousel = () => {
  const [error, setError] = useState(false);
  const [carousels, setCarousel] = useState([]);

  const totalCount = gql`
    query {
      totalCarousels
    }
  `;

  const fetchCarousels = async () => {
    try {
      const { data } = await client.query({
        query: query.carousels,
      });
      setCarousel(data.carousels);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCarousels();
  }, []);

  console.log(carousels);

  const addCarousel = async values => {
    console.log(values);
    const { data } = await client.query({
      query: totalCount,
    });
    const index = data.totalCarousels;

    const formData = new FormData();
    // formData.append('name', values.);
    formData.append('path', '/banners');
    formData.append('image', values.image);
    try {
      const { data: imagePath } = await axios.post(
        `${IMAGE_UPLOAD_HOST}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );

      await client.mutate({
        mutation: gql`
          mutation(
            $image: String!
            $show: Boolean!
            $index: Int!
            $tagID: String!
          ) {
            createCarousel(
              data: {
                image: $image
                show: $show
                index: $index
                tag: { connect: { name: $tagID } }
              }
            ) {
              image
              show
              index
              tag {
                name
              }
            }
          }
        `,
        variables: {
          show: true,
          index,
          image: `/banners/${imagePath}`,
          tagID: values.tag.label,
        },
      });
      notification.success({
        placement: 'topRight',
        message: `${values.name} carousel added!`,
      });
      navigate('/carousel');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col span={7} />
      <Col span={10}>
        <Formik enableReinitialize onSubmit={addCarousel}>
          {({ handleSubmit }) => (
            <React.Fragment>
              <strong>Name: </strong>
              <Field
                name="tag"
                placeholder="Select Carousel Tags"
                options={carousels.map(carousel => ({
                  label: carousel.tag.name,
                  id: carousel.id,
                }))}
                labelInValue
                component={SelectInput}
              />

              <strong>Choose Carousel Image</strong>
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
                Add Carousel
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

export default AddCarousel;
