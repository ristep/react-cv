import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

render((
  <BrowserRouter basename={'/react-cv'}>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
