import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calculations from './calculations';
import balances from './balances';
import tickers from './tickers';
import locale from './locale';
import fees from './fees';

export default (history) => combineReducers({
  router: connectRouter(history),
  calculations,
  balances,
  tickers,
  locale,
  fees,
});
