import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App.jsx';
import { initTranslation } from './js/translate.js';
import { Provider } from 'react-redux';
import rootReducer from './js/reducers';
import { createStore } from 'redux';

initTranslation();

const store = createStore(rootReducer);

ReactDOM.render(
  React.createElement(
    Provider,
    { store: store },
    React.createElement(App, { key: 'app' }),
  ),
  window.document.getElementById('main-app-container'),
);

module.hot.accept();
