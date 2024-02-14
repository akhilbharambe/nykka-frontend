import React from 'react';
import { useRoutes } from 'react-router-dom';

import Logo from './compoenets/sidebar/logo';
import SideBar from './compoenets/sidebar/sidebar';
import Header from './compoenets/searchbar/header';
import FilterByGen from './compoenets/filters/filterByGen';
import AddProduct from './compoenets/button/addproduct';
import Products from './compoenets/products/productlist';
import FilterByCategory from './compoenets/filters/filterbycategory';
import SortByPrice from './compoenets/filters/sortByPrice';
import Login from './compoenets/pages/login';
import Signup from './compoenets/pages/signup';
function App() {
  const routes = useRoutes([
    { path: '/dashboard', element: <><Logo /><SideBar /><FilterByGen /><AddProduct /><Products /><FilterByCategory /><SortByPrice /></> },
    { path: '/', element: <Login /> },
    { path: '/signup', element: <Signup /> }
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
