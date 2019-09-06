import React from 'react';
import { Field, Formik } from 'formik';
import CkEditor from '../includes/Form/CkEditor';

const PrivacyPolicy = () => (
  <div>
    <h1 style={{ textAlign: 'center', fontSize: 30 }}>Privacy Policy</h1>
    <Formik enableReinitialize>
      <Field name="description" component={CkEditor} />
    </Formik>
  </div>
);

export default PrivacyPolicy;
