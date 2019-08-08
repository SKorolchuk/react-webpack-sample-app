import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App.jsx';

ReactDOM.render(
  React.createElement(App),
  window.document.getElementById('main-app-container'),
);

module.hot.accept();
