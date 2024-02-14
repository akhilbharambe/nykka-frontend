// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouter as Router, Routes } from 'react-router-dom';
import store from './store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   
    
    <Router>
      <App />
    </Router>
        
      
   
  </React.StrictMode>,
  document.getElementById('root')
);
