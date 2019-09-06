/* eslint-disable no-console */
import React from 'react';
import { Button, message, Row, Col, notification } from 'antd';
import { navigate } from '@reach/router';
import { Field, Formik } from 'formik';
import gql from 'graphql-tag';
import axios from 'axios';
import TextInput from '../../includes/Form/TextInput';
import FileInput from '../../includes/Form/FileInput';
import client from '../../../app/config/apollo';
import { IMAGE_UPLOAD_HOST } from '../../../app/config/constants';
import { margin } from '../../../styles';

const goBack = () => window.history.back();

const AddCategories = () => {
  const addCategory = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('path', '/categories');
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
          mutation($name: String!, $image: String!) {
            createCategory(data: { name: $name, image: $image }) {
              id
            }
          }
        `,
        variables: {
          name: values.name,
          image: `/categories/${imagePath}`,
        },
      });
      notification.success({
        placement: 'topRight',
        message: `${values.name} category added!`,
      });
      navigate('/categories');
    } catch (error) {

    }
  };

  return (
    <Row>
      <Col span={7} />
      <Col span={10}>
        <Formik enableReinitialize onSubmit={addCategory}>
          {({ handleSubmit }) => (
            <React.Fragment>
              <strong>Name: </strong>
              <Field
                name="name"
                placeholder="Category Name"
                component={TextInput}
              />
              <strong>Choose Category Image</strong>
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
                Add Category
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

export default AddCategories;
