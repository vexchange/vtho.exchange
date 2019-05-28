import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import calculations from './calculations';
import balances from './balances';
import contract from './contract';
import tickers from './tickers';
import locale from './locale';
import token from './token';
import fees from './fees';

export default (history) => combineReducers({
  router: connectRouter(history),
  calculations,
  balances,
  contract,
  tickers,
  locale,
  token,
  fees,
});
