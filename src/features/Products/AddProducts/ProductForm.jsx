import React from 'react';
import { withFormik, Field } from 'formik';
import { Row, Col, Button, Icon, Spin, Popconfirm, message } from 'antd';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';

import TextInput from '../../includes/Form/TextInput';
import NumberInput from '../../includes/Form/NumberInput';
import CkEditor from '../../includes/Form/CkEditor';
import SelectInput from '../../includes/Form/Select';
import FileInput from '../../includes/Form/FileInput';
import Switch from '../../includes/Form/Switch';

const formikConfig = {
  enableReinitialize: true,
  handleSubmit: async details => {
    const formData = new FormData();
    formData.append('image', details.image);
    await axios.post('http://localhost:8080/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};

const FETCH_CATEGORIES = gql`
  query {
    categories {
      id
      name
      image
    }
  }
`;

const FETCH_TAGS = gql`
  {
    tags {
      id
      name
    }
  }
`;

const FETCH_SUBCATEGORIES = gql`
  query($category: ID!) {
    subCategories(where: { category: { id: $category } }) {
      id
      name
      image
    }
  }
`;

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const dispatchDuration = [
  '1-2 Days',
  '2-3 Days',
  '3-4 Days',
  '4-5 Days',
  '5-6 Days',
  '6-7 Days',
  'More than 7 days',
];

const deliveryDuration = [
  '1-2 Days',
  '2-3 Days',
  '3-4 Days',
  '4-5 Days',
  '5-6 Days',
  '6-7 Days',
  'More than 7 days',
];

const ProductForm = props => {
  const { loading } = props;
  const { values, initialValues, resetForm, handleSubmit } = props;

  const { category } = values;

  return (
    <Spin spinning={!!loading} tip="loading...">
      <Row gutter={20}>
        <Col span={16}>
          <Field name="name" placeholder="Product Name" component={TextInput} />
          <Field
            name="price.sellingPrice"
            placeholder="Selling Price"
            formatter={value =>
              `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={value => value.replace(/₹\s?|(,*)/g, '')}
            component={NumberInput}
          />
          <Field
            name="price.discountPercent"
            placeholder="Discount Percent"
            min={1}
            max={95}
            formatter={value => `${value}%`}
            parser={value => value.replace('%', '')}
            component={NumberInput}
          />
          <Field name="description" component={CkEditor} />
          <Query query={FETCH_TAGS}>
            {({ loading, error, data }) => {
              if (loading) return <span>loading...</span>;
              if (error) {
                return <span>error ...</span>;
              }
              const { tags } = data;
              return (
                <Field
                  name="tags"
                  mode="multiple"
                  placeholder="Select Product Tags"
                  options={tags.map(tag => ({
                    label: tag.name,
                    id: tag.id,
                    key: tag.name,
                  }))}
                  labelInValue
                  component={SelectInput}
                />
              );
            }}
          </Query>
          <Query query={FETCH_CATEGORIES}>
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
          {!category ? (
            <Field
              name="subCategory.name"
              placeholder="Please Select Sub Category First"
              options={[]}
              component={SelectInput}
              disabled
            />
          ) : (
            <Query
              query={FETCH_SUBCATEGORIES}
              variables={{ category: category.key }}
            >
              {({ loading, error, data }) => {
                if (loading) return <span>loading...</span>;
                if (error) {
                  return <span>error...</span>;
                }
                const { subCategories } = data;
                return (
                  <Field
                    name="subCategory"
                    placeholder="Select Item Sub Category"
                    labelInValue
                    options={subCategories.map(subCategory => ({
                      label: subCategory.name,
                      id: subCategory.id,
                    }))}
                    component={SelectInput}
                  />
                );
              }}
            </Query>
          )}
          <Field
            name="sizes"
            mode="multiple"
            placeholder="Select Product Sizes"
            options={sizes}
            component={SelectInput}
          />

          <Field
            name="dispatchDuration"
            placeholder="Dispatch Duration"
            options={dispatchDuration}
            component={SelectInput}
          />

          <Field
            name="deliveryDuration"
            placeholder="Delivered Within"
            options={deliveryDuration}
            component={SelectInput}
          />

          <Field
            name="deliveryWithin"
            placeholder="Delivered Within"
            component={TextInput}
          />
        </Col>
        <Col span={8}>
          <Field
            name="image._200x200"
            listType="picture-card"
            className="avatar-uploader"
            boxWidth="340px"
            maxSize={5 * 1024 * 1024}
            onError={error => message.error(error)}
            fileTypes={['image/jpg', 'image/png', 'image/jpeg']}
            multiple={false}
            component={FileInput}
          />
          <Field
            name="quantity"
            min={1}
            placeholder="Quantity"
            component={NumberInput}
          />
          <Row gutter={20}>
            <Col span={12}>Availability: </Col>
            <Col>
              <Field
                name="available"
                checkedChildren="Available"
                unCheckedChildren="Unavailable"
                component={Switch}
              />
            </Col>
            <br />
            <Col span={12}>Featuring: </Col>

            <Col>
              <Field
                name="featured"
                checkedChildren="Featured"
                unCheckedChildren="Non-Featured"
                component={Switch}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <Button type="primary" block onClick={handleSubmit}>
                {initialValues.id ? 'Update Item' : 'Add Item'}
              </Button>
            </Col>
            <Col span={initialValues.id ? 8 : 12}>
              <Button block onClick={() => resetForm()}>
                Cancel
              </Button>
            </Col>
            {initialValues.id && (
              <Col>
                <Popconfirm
                  title="Are you sure？"
                  icon={
                    <Icon type="question-circle-o" style={{ color: 'red' }} />
                  }
                  onConfirm={() => {}}
                >
                  <Button type="danger">
                    <Icon type="delete" />
                  </Button>
                </Popconfirm>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Spin>
  );
};

export default withFormik(formikConfig)(ProductForm);
