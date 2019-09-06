import React from 'react';
import CKEditor from 'react-ckeditor-component';

import { FormInput } from './Form.module.css';

const CkEditor = ({ field, form, form: { touched, errors }, ...props }) => {
  const { name, value } = field;

  const events = {
    change: ({ editor }) => form.setFieldValue(field.name, editor.getData()),
  };

  return (
    <div className={FormInput}>
      <CKEditor content={value} events={events} {...field} {...props} />
      {touched[name] && errors[name] && (
        <div className="error">{errors[name]}</div>
      )}
    </div>
  );
};

export default CkEditor;
