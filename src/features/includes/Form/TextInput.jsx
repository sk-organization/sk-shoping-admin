import React from 'react';
import { Input } from 'antd';

import { FormInput } from './Form.module.css';

const TextInput = ({ field, form: { touched, errors }, ...props }) => (
  <div className={FormInput}>
    <Input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

export default TextInput;
