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
import PrivacyPolicy from './features/Settings/PrivacyPolicy';
import Reports from './features/Reports/Reports';

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
        <Content className={c.Content}>
          <PosedRouter>
            <Dashboard path="/" />

            <Products path="/products" />
            <Product path="/product/:id" />
            <AddProducts path="/products/add-product" />

            <Orders path="/orders" />

            <Categories path="/categories" />
            <AddCategories path="/categories/add-categories" />
            <SubCategories path="/sub-categories" />
            <AddSubCategories path="/categories/add-subCategories" />

            <Reseller path="/reseller/:id" />
            <Resellers path="/resellers" />

            <Seller path="/seller/:id" />
            <Sellers path="/sellers" />

            <Reports path="/reports" />

            <Settings path="/settings" />
            <Carousel path="/carousel" />
            <PrivacyPolicy path="/privacy-policy" />

            <Order path="/order/:id" />
            <AddProducts path="/products/:id" />
            <Customers path="/customers" />
            <Customer path="/customer/:id" />
          </PosedRouter>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
