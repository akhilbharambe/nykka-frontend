// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
//import Home from './pages/Home';
import ProductList from './components/dashboard.js/ProductList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// import Dashboard from './pages/Dashboard';
// import Analytics from './components/analytics/CategoryChart';
// import PrivateRoute from './components/PrivateRoute';

const AppRouter = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return (
    
  <div>
      <Navbar />
      {/* <Route path="/" exact component={Home} /> */}
      <Routes>
      <Route path="/products" exact Component={ProductList} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      </Routes>
      {/* <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
      <PrivateRoute path="/analytics" component={Analytics} isAuthenticated={isAuthenticated} /> */}
      <Footer />
      </div>
    
  );
};

export default AppRouter;
