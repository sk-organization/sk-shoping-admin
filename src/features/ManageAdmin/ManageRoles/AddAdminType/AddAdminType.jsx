import React from 'react';
import { Field, Formik } from 'formik';
import { Button, Row, Col } from 'antd';
import SelectInput from '../../../includes/Form/Select';
import TextInput from '../../../includes/Form/TextInput';
import { margin } from '../../../../styles';

const goBack = () => window.history.back();

const AdminTypeStatus = ['Active', 'Inactive'];

const AddAdminType = () => {
  return (
    <Row>
      <Col span={7} />
      <Col span={8}>
        <div style={{ padding: 10 }}>
          <Formik enableReinitialize>
            <React.Fragment>
              <strong>Add Admin</strong>
              <Field
                name="adminName"
                placeholder="Admin Name"
                component={TextInput}
              />
              <strong>Status</strong>
              <Field
                name="adminTypes"
                placeholder="Select Status"
                options={AdminTypeStatus}
                component={SelectInput}
              />
              <Button style={margin.mr10} type="primary">
                Add Type
              </Button>
              <Button type="default" onClick={goBack}>
                Back
              </Button>
            </React.Fragment>
          </Formik>
        </div>
      </Col>
    </Row>
  );
};

export default AddAdminType;
