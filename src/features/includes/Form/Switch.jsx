import React from 'react';
import { Switch as AntSwitch } from 'antd';

import { FormInput } from './Form.module.css';

const Switch = ({ field, form, form: { touched, errors }, ...props }) => {
  const { getValue, label } = props;
  return (
    <div className={FormInput}>
      {label}: &nbsp;&nbsp;&nbsp;
      <AntSwitch
        checked={field.value}
        {...field}
        {...props}
        onChange={value => {
          form.setFieldValue(field.name, value);
          if (getValue) {
            getValue(value, field.name);
          }
        }}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default Switch;
