import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calculations from './calculations.js';
import balances from './balances.js';
import tickers from './tickers.js';
import fees from './fees.js';

export default (history) => combineReducers({
  router: connectRouter(history),
  calculations,
  balances,
  tickers,
  fees,
});
