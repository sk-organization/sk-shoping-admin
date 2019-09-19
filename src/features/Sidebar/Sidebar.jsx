import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';

import SubMenu from 'antd/lib/menu/SubMenu';
import { navigate } from '@reach/router';
import Logo from '../includes/Logo/Logo';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={256}
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Logo fontSize={collapsed} />

      <Menu mode="inline" theme="dark">
        <Menu.Item onClick={() => navigate('/')}>
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/orders')}>
          <Icon type="shopping-cart" />
          <span>Orders</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/products')}>
          <Icon type="database" />
          <span>Products</span>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="bars" />
              <span>Categories</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/categories')}>
            <Icon type="right-circle" />
            Categories
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/sub-categories')}>
            <Icon type="right-circle" />
            SubCategories
          </Menu.Item>
        </SubMenu>
        <Menu.Item onClick={() => navigate('/sellers')}>
          <Icon type="user" />
          <span>Sellers</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/resellers')}>
          <Icon type="usergroup-add" />
          <span>Frenchise</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/customers')}>
          <Icon type="user" />
          <span>Customers</span>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="file-done" />
              <span>Reports</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/reports')}>
            <Icon type="profile" />
            <span> All Reports</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/reports/customer-loyalty')}>
            <Icon type="profile" />
            <span>Customer</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/reports/product-loyalty')}>
            <Icon type="profile" />
            <span>Product</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('reports/orders-loyalty')}>
            <Icon type="profile" />
            <span>Orders</span>
          </Menu.Item>
        </SubMenu>

        {/* <Menu.Item
            onClick={() => navigate('/reports/products-purchased-report')}
          >
            <Icon type="right-circle" />
            <span>ProductsPurchasedReport</span>
          </Menu.Item> */}

        {/* <Menu.Item onClick={() => navigate('/reports/frenchise')}>
            <Icon type="right-circle" />
            <span>Frenchise</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/reports/sales')}>
            <Icon type="right-circle" />
            <span>Sales</span>
          </Menu.Item> */}

        <SubMenu
          title={
            <span>
              <Icon type="file-done" />
              <span>Privacy</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/t&c')}>
            <Icon type="right-circle" />
            <span>Term & Conditions</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/privacy')}>
            <Icon type="right-circle" />
            <span>Privacy Policy</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="setting" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/carousel')}>
            <Icon type="right-circle" />
            <span>Carousel</span>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <span>
              <Icon type="usergroup-add" />
              <span>Manage Admins</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/admin/admins')}>
            <Icon type="right-circle" />
            <span>Admins</span>
          </Menu.Item>
          <Menu.Item onClick={() => navigate('/admin/manage-roles')}>
            <Icon type="right-circle" />
            <span>Manage Roles</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
