import App from './js/components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('main-app-container')
);

module.hot.accept();