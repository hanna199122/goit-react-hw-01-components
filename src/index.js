import React from 'react';
import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';
import App from './components/app';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const element = <p> Hi</p>;

// console.log(element);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// console.log(root);
