import React from 'react';
import { InputNumber } from 'antd';

import { FormInput } from './Form.module.css'

const NumberInput = ({ field, form, form: { touched, errors }, ...props }) => (
  <div className={FormInput}>
    <InputNumber
      style={{ width: '200px' }}
      {...field}
      {...props}
      onChange={value => form.setFieldValue(field.name, value)}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

export default NumberInput;
