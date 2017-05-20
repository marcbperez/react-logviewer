import React from 'react';
import ReactDOM from 'react-dom';
import Log from './Log';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const entries = [{ id: 3, created: '2017-05-01', etag: '' }];
  ReactDOM.render(<Log entries={entries} />, div);
});
