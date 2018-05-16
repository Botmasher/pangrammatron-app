import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// test data
const store = {
  '0': {
    'text': 'asdf',
    'data': [0, 1, 2, 3, 4]
  },
  '1': {
    'text': 'asdf',
    'data': [5, 6, 7, 8, 9]
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
