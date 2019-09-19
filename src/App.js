/* eslint-disable quotes */
import React, { useState } from 'react';
import { Layout, PageHeader } from 'antd';
import { Router, createHistory, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

import c from './App.module.css';

import Sidebar from './features/Sidebar/Sidebar';
import Dashboard from './features/Dashboard/Dashboard';
import Products from './features/Products/Products';
import Orders from './features/Orders/Orders';
import Resellers from './features/Resellers/Resellers';
import Reseller from './features/Resellers/Reseller/Reseller';
import Seller from './features/Sellers/Seller/Seller';
import Sellers from './features/Sellers/Sellers';
import AddProducts from './features/Products/AddProducts/AddProducts';
import Product from './features/Products/QuickActions/Product/Product';
import Categories from './features/Categories/Categories';
import SubCategories from './features/Categories/SubCategories/SubCategories';
import AddCategories from './features/Categories/AddCategory/AddCategory';
import AddSubCategories from './features/Categories/SubCategories/AddSubCategory/AddSubCategory';
import Order from './features/Orders/Order/Order';
import Customers from './features/Customers/Customers';
import Customer from './features/Customers/Customer/Customer';
import Settings from './features/Settings/Settings';
import Carousel from './features/Settings/Carousel';
import Reports from './features/Reports/Reports';
import Frenchise from './features/Reports/Frenchise/Frenchise';
import Sales from './features/Reports/Sales/Sales';
import TermAndCondition from './features/Policy/Term&Condition';
import Privacy from './features/Policy/Privacy';
import BreadcrumbGroup from './BreadCrumb';
import Admins from './features/ManageAdmin/Admins/Admins';
import ManageRoles from './features/ManageAdmin/ManageRoles/ManageRoles';
import AddAdmins from './features/ManageAdmin/Admins/AddAdmins/AddAdmins';
import AddAdminType from './features/ManageAdmin/ManageRoles/AddAdminType/AddAdminType';
import CustomerLoyalty from './features/Reports/CustomerLoyalty/CustomerLoyalty';
import ProductLoyalty from './features/Reports/ProductLoyalty/ProductLoyalty';

const { Content } = Layout;

const history = createHistory(window);

const titleMapping = {
  Dashboard: 'ECOMMERCE OVERVIEW',
  products: 'PRODUCTS MENU',
  orders: "CUSTOMER'S ORDERS",
  sellers: "SELLER'S INFORMATION",
  resellers: "RESELLER'S INFORMATION",
  customers: 'CUSTOMERS',
  settings: 'SETTINGS',
  categories: 'CATEGORIES',
};

const goBack = () => {
  window.history.go(-1);
};

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 },
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

const App = () => {
  const route = history.location.pathname.slice(1);
  const initialTitle = titleMapping[route];
  const [title, setTitle] = useState(initialTitle);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar setTitle={setTitle} />
      <Layout>
        <PageHeader className={c.PageHeader} title={title} onBack={goBack} />
        {/* <p>
          <BreadcrumbGroup />
        </p> */}
        <Content className={c.Content}>
          <PosedRouter>
            {/* Dashboard Sections */}
            <Dashboard path="/" />

            {/* Product Sections */}
            <Products path="/products" />
            <Product path="/product/:id" />
            <AddProducts path="/products/add-product" />
            <Product path="/reports/product" />
            <AddProducts path="/products/:id" />

            {/* Oreders Sections */}
            <Orders path="/orders" />
            <Order path="/order/:id" />

            {/* Categories & SubCategories Sections */}
            <Categories path="/categories" />
            <AddCategories path="/categories/add-categories" />
            <SubCategories path="/sub-categories" />
            <AddSubCategories path="/categories/add-subCategories" />

            {/* Resellers Or Frenchise Sections */}
            <Reseller path="/reseller/:id" />
            <Resellers path="/resellers" />

            {/* Sellers Sections */}
            <Seller path="/seller/:id" />
            <Sellers path="/sellers" />

            {/* Customer Sections */}
            <Customers path="/customers" />
            <Customer path="/customer/:id" />

            {/* Reports Sections */}
            <Reports path="/reports" />
            <Frenchise path="/reports/frenchise" />
            <Sales path="/reports/sales" />

            {/* Loayal Customers */}
            <CustomerLoyalty path="/reports/customer-loyalty" />
            <ProductLoyalty path="/reports/product-loyalty" />

            {/* Privacy Policy Sections */}
            <TermAndCondition path="/t&c" />
            <Privacy path="/privacy" />

            {/* Settings Sections */}
            <Settings path="/settings" />
            <Carousel path="/carousel" />

            {/* Admin Sections */}
            <Admins path="/admin/admins" />
            <AddAdmins path="/admin/add-admins" />

            <ManageRoles path="/admin/manage-roles" />
            <AddAdminType path="/admin/add-admin-type" />
          </PosedRouter>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
