/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import { Button } from 'antd';
import CkEditor from '../includes/Form/CkEditor';

const TermsAndConditions = () => {
  const [loading, setLoading] = useState(false);
  const [generalPolicy, setGeneralPolicy] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('http://192.168.10.14:5000/t_and_c').then(res => {
      const { data } = res;
      setGeneralPolicy(data.t_and_c);
      setLoading(false);
    });
  }, []);

  const handleSubmit = ({ t_and_c }) => {
    setLoading(true);
    axios
      .post('http://192.168.10.14:5000/t_and_c', {
        t_and_c,
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (loading) return <div>Loading ...</div>;

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ t_and_c: generalPolicy }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <>
              <h2>Term & Conditions</h2>
              <Field name="t_and_c" component={CkEditor} />
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

export default TermsAndConditions;
