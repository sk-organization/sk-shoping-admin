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
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Logo fontSize={collapsed} />
      {/* <Menu theme="dark" mode="inline">
        <SidebarItem
          title="DASHBOARD"
          to="/dashboard"
          icon="dashboard"
          onClick={() => setTitle("Ecommerce Overview")}
        />
        <SidebarItem
          title="ORDERS"
          to="/orders"
          icon="shopping-cart"
          onClick={() => setTitle("CUSTOMER'S ORDERS LIST")}
        />
        <SidebarItem
          title="PRODUCTS"
          to="/products"
          icon="bars"
          onClick={() => setTitle("PRODUCTS LIST")}
        />

        {/* <SidebarItem
          title="CATEGORIES"
          icon="bars"
          onClick={() => setTitle("PRODUCTS LIST")}
        />

        <SubMenu
          key="junky"
          title={
            <span>
              <Icon type="dot" />
              <span>CATEGORIES</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate("/categories")}>
            <Icon type="dot" />
            <span>Categories</span>{" "}
          </Menu.Item>
          <Menu.Item onClick={() => navigate("/sub-categories")}>
            <Icon type="dot" />
            <span>SubCategories</span>{" "}
          </Menu.Item>
        </SubMenu>

        <SidebarItem
          title="SELLERS"
          to="/sellers"
          icon="user"
          onClick={() => setTitle("SELLERS LIST")}
        />
        <SidebarItem
          title="RESELLERS"
          to="/resellers"
          icon="usergroup-add"
          onClick={() => setTitle("RESELLERS LIST")}
        />
        <SidebarItem
          title="STATISTICS"
          to="/statistics"
          icon="bar-chart"
          onClick={() => setTitle("STATISTICS DATA")}
        />
        <SidebarItem
          title="SETTINGS"
          to="/settings"
          icon="setting"
          onClick={() => setTitle("SETTINGS")}
        />
      </Menu> */}

      <Menu mode="inline" theme="dark">
        <SubMenu
          title={
            <span>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/')}>
            <Icon type="dashboard" />
            <span>Analysis Page</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/')}>
            <Icon type="dashboard" />
            <span>Monitoring Page</span>
          </Menu.Item>
        </SubMenu>

        <Menu.Item onClick={() => navigate('/orders')}>
          <Icon type="shopping-cart" />
          <span>Orders</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/products')}>
          <Icon type="dropbox" />
          <span>Products</span>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="appstore" />
              <span>Categories</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/categories')}>
            <Icon type="appstore" />
            Categories
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/sub-categories')}>
            <Icon type="bars" />
            SubCategories
          </Menu.Item>
        </SubMenu>
        <Menu.Item onClick={() => navigate('/sellers')}>
          <Icon type="user" />
          <span>Sellers</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/resellers')}>
          <Icon type="usergroup-add" />
          <span>Resellers</span>
        </Menu.Item>

        <Menu.Item onClick={() => navigate('/customers')}>
          <Icon type="user" />
          <span>Customers</span>
        </Menu.Item>

        <SubMenu
          title={
            <span>
              <Icon type="profile" />
              <span>Reports</span>
            </span>
          }
        >
          <Menu.Item onClick={() => navigate('/order-total')}>
            <Icon type="user" />
            <span>Customer Order Total</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/low-stock-products')}>
            <Icon type="user" />
            <span>Low Stock Products</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/out-of-stock-products')}>
            <Icon type="user" />
            <span>Out Of Stock Products</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/products-liked')}>
            <Icon type="user" />
            <span>Products Liked</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/total-purchased')}>
            <Icon type="user" />
            <span>Total Purchased</span>
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
            <Icon type="home" />
            <span>Carousel</span>
          </Menu.Item>

          <Menu.Item onClick={() => navigate('/privacy-policy')}>
            <Icon type="safety" />
            <span>Privacy Policy</span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
