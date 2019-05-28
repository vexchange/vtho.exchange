import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger';
import { addLocaleData } from 'react-intl';
import browserLocale from 'browser-locale';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import createRootReducer from './reducers';
import LocaleContainer from './containers/LocaleContainer';

import 'normalize.css';
import "antd/dist/antd.css";
import './index.css';

import App from './App';

const history = createBrowserHistory();

const locale = browserLocale();
const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];

const middleWare = applyMiddleware(
  thunk,
  promiseMiddleware(),
  createLogger({ collapsed: true }),
  routerMiddleware(history),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancers(middleWare),
);

addLocaleData([...en, ...zh]);

ReactDOM.render(
  <Provider store={store}>
    <LocaleContainer locale={localeWithoutRegionCode}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LocaleContainer>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
