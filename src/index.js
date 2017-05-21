import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Service from './Service'

/* Service configuration. */
const token = ''
const service = new Service('http://127.0.0.1:5000/v1', token);

/* Render main application. */
ReactDOM.render(
  <App service={service} />,
  document.getElementById('root')
);
