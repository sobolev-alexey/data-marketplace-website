import React from 'react';
import { createRoot } from 'react-dom/client';
import WebFontLoader from 'webfontloader';
import { Provider } from 'react-redux';
import './assets/scss/index.scss';
import Router from './Router';
import configureStore from './store/configure';
import * as serviceWorker from './serviceWorker';

WebFontLoader.load({
  google: {
    families: ['Nunito Sans:300,400,600,700', 'Material Icons'],
  },
});

const store = configureStore();

const renderApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(renderApp());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
