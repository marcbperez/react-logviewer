import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Service from './Service'

fetch = jest.fn(() => new Promise(resolve => resolve()));

it('renders without crashing', () => {
  const service = new Service('', '');
  const div = document.createElement('div');
  ReactDOM.render(<App service={service}/>, div);
});
