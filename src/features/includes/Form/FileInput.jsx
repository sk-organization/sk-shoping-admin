import React, { useState } from 'react';
import { Upload, Icon } from 'antd';

import { FormInput } from './Form.module.css';

const FileInput = ({ field, form, form: { touched, errors }, ...props }) => {
  const [loading, setLoading] = useState(false);

  const { value } = field;
  const { boxWidth, maxSize, onError, fileTypes } = props;

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const validate = file => {
    if (!fileTypes.includes(file.type)) {
      onError(`${file.type.split('/')[1]} type file in not supported!`);
      return false;
      // eslint-disable-next-line no-else-return
    } else if (file.size > maxSize) {
      onError(`File is too big, Max. Size is ${maxSize / (1024 * 1024)} MB`);
      return false;
    }
    return true;
  };

  const upload = info => {
    const { status, originFileObj } = info.file;
    if (status === 'uploading') {
      setLoading(true);
    }
    if (status === 'done') {
      getBase64(originFileObj, () => {
        setLoading(false);
        form.setFieldValue(field.name, originFileObj);
      });
    }
  };

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  let content = null;

  if (!loading && value) {
    const imageSource = value;
    // if (value.startsWith('/')) {
    //   imageSource = 'https://digital-menu-ffdbd.firebaseapp.com' + value;
    // }
    content = (
      <img src={imageSource} alt="avatar" style={{ width: boxWidth }} />
    );
  } else if (!loading && !value) {
    content = uploadButton;
  }

  return (
    <div className={FormInput}>
      <Upload
        beforeUpload={validate}
        {...field}
        {...props}
        customRequest={({ onSuccess }) => setTimeout(() => onSuccess('ok'), 0)}
        onChange={upload}
      >
        {content}
      </Upload>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  );
};

export default FileInput;
