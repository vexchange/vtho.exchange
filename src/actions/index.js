import Web3 from "web3";
import { thorify } from 'thorify';
import axios from 'axios';

import ContractJson from "../build/contracts/exchange.json";
import ERC20Abi from "../build/contracts/erc20.json";

const web3 = thorify(new Web3(), "https://vechain-api.monti.finance");

export const setTokenAndAddress = token => {
  return (dispatch) => {
    dispatch(setToken(token));
    dispatch(getAddress());
  }
}

export const getAddress = () => {
  return (dispatch, getState) => {
    const { exchangeAddress } = getState().token;
    dispatch(setContract(exchangeAddress));
  }
}

export const setToken = token => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const setContract = address => ({
  type: 'SET_CONTRACT',
  payload: new web3.eth.Contract(ContractJson, address),
});

export const fetchBalancesThunk = token => {
  return (dispatch, getState) => {
    const contract = new web3.eth.Contract(ERC20Abi, token.tokenAddress);
    const { balanceOf } = contract.methods;
    const getBalance = balanceOf(token.exchangeAddress).call();

    dispatch(fetchBalances(token, getBalance));
  }
}

export const fetchBalances = (token, getBalance) => ({
  type: 'FETCH_BALANCES',
  payload: Promise.all([
    web3.eth.getBalance(token.exchangeAddress),
    getBalance,
  ]),
  meta: {
    token,
  }
});

export const fetchTickers = token => ({
  type: 'FETCH_TICKERS',
  payload: axios({
    url: 'https://vtho-exchange-api.herokuapp.com/tickers_multi',
    method: 'GET',
    params: {
      markets: [
        'vetusdt',
        token.market
      ]
    }
  }),
  meta: {
    token
  },
});

export const fetchFees = () => ({
  type: 'FETCH_FEES',
});

export const calculateTokenThunk = (val, token) => {
  return (dispatch, getState) => {
    const { contract } = getState();
    const { getEthToTokenInputPrice } = contract.methods;

    const num = web3.utils.toWei(val);

    getEthToTokenInputPrice(num).call().then(data => {
      dispatch(calculateToken(data, token));
    });
  }
};

export const calculateToken = (val, token) => {
  return {
    type: 'CALCULATE_TOKEN',
    payload: val,
    meta: { web3, token },
  }
};

export const calculateVETThunk = (val, token) => {
  return (dispatch, getState) => {
    const { contract } = getState();
    const { getTokenToEthInputPrice } = contract.methods;
    const num = web3.utils.toWei(val);

    getTokenToEthInputPrice(num).call().then(data => {
      dispatch(calculateVET(data, token));
    });
  }
};

export const calculateVET = val => {
  return {
    type: 'CALCULATE_VET',
    payload: val,
    meta: { web3 },
  };
};

export const changeLanguage = (val) => {
  return {
    type: 'CHANGE_LOCALE',
    payload: val,
  }
};



