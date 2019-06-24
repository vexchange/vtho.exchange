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
    const { tokenAddress } = getState().token;
    dispatch(setContract(tokenAddress));
  }
}

export const setToken = token => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const setContract = address => ({
  type: 'SET_CONTRACT',
  payload: new web3.eth.Contract(ContractJson.abi, address),
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
    web3.eth.getBalance(token.address),
    getBalance,
  ]),
  meta: {
    token,
  }
});

export const fetchTickers = token => ({
  type: 'FETCH_TICKERS',
  payload: axios({
    url: 'http://localhost:3001/tickers_multi',
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

export const calculateVTHO = val => {
  return (_, getState) => {
    const { contract } = getState();
    const { getEthToTokenPrice } = contract.methods;
    const num = web3.utils.toWei(val);

    return {
      type: 'CALCULATE_VTHO',
      payload: getEthToTokenPrice(num).call(),
      meta: { web3 },
    }
  }
};

export const calculateVET = (val) => {
  return (_, getState) => {
    const { contract } = getState();
    const { getTokenToEthPrice } = contract.methods;
    const num = web3.utils.toWei(val);

    return {
      type: 'CALCULATE_VET',
      payload: getTokenToEthPrice(num).call(),
      meta: { web3 },
    };
  }
};

export const changeLanguage = (val) => {
  return {
    type: 'CHANGE_LOCALE',
    payload: val,
  }
};



