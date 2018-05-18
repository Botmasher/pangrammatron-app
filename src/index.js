import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';
import App from './App';

const store = createStore();
// test data
// const store = {
//   '0': {
//     'text': 'asdf',
//     'data': [0, 1, 2, 3, 4]
//   },
//   '1': {
//     'text': 'asdf',
//     'data': [5, 6, 7, 8, 9]
//   }
// };

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
