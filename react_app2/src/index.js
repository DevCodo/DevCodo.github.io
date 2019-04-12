import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';
import 'fetch-polyfill';
import './scss/main.scss'

import App from './components/App'



ReactDOM.render(<App />, document.querySelector('#root'));