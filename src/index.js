import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';

import createRootReducer from './reducers';

import 'normalize.css';
import "antd/dist/antd.css";
import './index.css';

import App from './App';

const history = createBrowserHistory();

const middleWare = applyMiddleware(
  promiseMiddleware(),
  createLogger({ collapsed: true }),
  routerMiddleware(history),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(middleWare),
);

addLocaleData([...en]);

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
