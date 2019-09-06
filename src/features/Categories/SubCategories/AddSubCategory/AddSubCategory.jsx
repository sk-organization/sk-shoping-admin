import React from 'react';
import { Button, message, Col, Row } from 'antd';
import { navigate } from '@reach/router';
import { Formik, Field } from 'formik';
import { Query } from 'react-apollo';
import axios from 'axios';
import gql from 'graphql-tag';
import FileInput from '../../../includes/Form/FileInput';
import client from '../../../../app/config/apollo';
import SelectInput from '../../../includes/Form/Select';
import TextInput from '../../../includes/Form/TextInput';
import { IMAGE_UPLOAD_HOST } from '../../../../app/config/constants';
import { margin } from '../../../../styles';

const AddSubCategories = props => {
  const { location } = props;

  const query = new URLSearchParams(location.search);

  const category = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const entry of query.entries()) {
    // eslint-disable-next-line prefer-destructuring
    category[entry[0]] = entry[1];
  }

  const goBack = () => window.history.back();

  const fetchCategory = gql`
    query {
      categories {
        id
        name
      }
    }
  `;

  const addSubCategory = async values => {
    try {
      const formData = new FormData();
      formData.append('path', '/sub-categories');
      formData.append('name', values.name);
      formData.append('image', values.image);
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
          mutation($name: String!, $image: String!, $categoryId: ID!) {
            createSubCategory(
              data: {
                name: $name
                image: $image
                category: { connect: { id: $categoryId } }
              }
            ) {
              name
              image
            }
          }
        `,
        variables: {
          name: values.name,
          image: `/sub-categories/${imagePath}`,
          categoryId: values.category.key,
        },
      });
      navigate('/sub-categories');
    } catch (error) {

    }
  };
  return (
    <Row>
      <Col span={7} />
      <Col span={10}>
        <Formik
          enableReinitialize
          initialValues={{ category }}
          onSubmit={addSubCategory}
        >
          {({ handleSubmit }) => (
            <React.Fragment>
              <strong>Name:</strong>
              <Field
                name="name"
                placeholder="Sub Category Name"
                component={TextInput}
              />
              <strong>Select Category:</strong>

              <Query query={fetchCategory}>
                {({ loading, error, data }) => {
                  if (loading) return <span>loading...</span>;
                  if (error) return <span>error...</span>;
                  const { categories } = data;
                  return (
                    <Field
                      name="category"
                      placeholder="Select Item Category"
                      options={categories.map(category => ({
                        label: category.name,
                        id: category.id,
                      }))}
                      labelInValue
                      component={SelectInput}
                    />
                  );
                }}
              </Query>
              <strong>Choose Sub Category Image</strong>
              <Field
                name="image"
                listType="picture-card"
                boxWidth="350px"
                maxSize={1 * 1024 * 1024}
                onError={error => message.error(error)}
                fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
                multiple={false}
                component={FileInput}
              />

              <Button style={margin.mr10} type="primary" onClick={handleSubmit}>
                Add SubCategory
              </Button>
              <Button type="default" onClick={goBack}>
                Back
              </Button>
            </React.Fragment>
          )}
        </Formik>
      </Col>
      <Col span={7} />
    </Row>
  );
};

export default AddSubCategories;
