import React from 'react';
import { Icon } from 'antd';
import NavLink from '../../includes/NavLink/NavLink';

const SidebarItem = ({ to, icon, title, onClick }) => (
  <React.Fragment>
    <NavLink
      className="ant-menu-item"
      activeClass="ant-menu-item-selected"
      to={to}
      onClick={onClick}
    >
      <Icon type={icon} />
      <span>{title}</span>
    </NavLink>
  </React.Fragment>
);

export default SidebarItem;
