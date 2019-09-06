import React from 'react';

import { Icon } from 'antd';
import c from './Logo.module.css';

const Logo = ({ fontSize }) => (
  <div className={c.Logo} style={{ fontSize: fontSize ? '.9rem' : '1.1rem' }}>
    <Icon type="ant-design" fontSize={50} />
    ADMIN
  </div>
);

export default Logo;
