/* eslint-disable camelcase */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { Button } from 'antd';
import axios from 'axios';
import CkEditor from '../includes/Form/CkEditor';

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('http://192.168.10.14:5000/p_and_p').then(res => {
      const { data } = res;
      setPrivacyPolicy(data.p_and_p);
      setLoading(false);
    });
  }, []);

  const handleSubmit = p_and_p => {
    setLoading(true);
    axios
      .post('http://192.168.10.14:5000/p_and_p', {
        p_and_p,
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ p_and_p: privacyPolicy }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <>
              <h2>Privacy Policy</h2>
              <Field name="p_and_p" component={CkEditor} />
              <Button
                style={{ fontSize: 16 }}
                type="primary"
                block
                onClick={handleSubmit}
              >
                Update
              </Button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default PrivacyPolicy;
