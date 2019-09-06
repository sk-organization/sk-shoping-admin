import React from 'react';
import { Select } from 'antd';

import { FormInput } from './Form.module.css';

const { Option } = Select;

const SelectInput = ({ field, form, ...props }) => {
  const { options, labelInValue, mode } = props;
  const { name } = field;
  const { touched, errors } = form;

  const onChange = value => {
    let fieldValue = value;
    if (labelInValue && !(mode === 'multiple')) {
      fieldValue = {
        label: value.label,
        key: value.key,
      };
    }
    form.setFieldValue(name, fieldValue);
  };

  let optionsList = options.map(option => (
    <Option key={option} value={option}>
      {option}
    </Option>
  ));

  // let fieldValue = value

  if (labelInValue) {
    optionsList = options.map(option => (
      <Option key={option.id} value={option.id}>
        {option.label}
      </Option>
    ));
    // fieldValue = value && value.key
  }

  return (
    <div className={FormInput}>
      <Select
        style={{ width: '100%' }}
        {...field}
        {...props}
        // value={fieldValue}
        onChange={onChange}
      >
        {optionsList}
      </Select>
      {touched[name] && errors[name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default SelectInput;
