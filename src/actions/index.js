import Web3 from "web3";
import { thorify } from 'thorify';

import ContractJson from "../build/contracts/exchange.json";

const web3 = thorify(new Web3(), "http://127.0.0.1:8669/");

cc.setApiKey(process.env.CRYPTOCOMPARE_API_KEY);

const getVTHO = () => cc.price('VTHO', ['USD']);
const getVET = () => cc.price('VET', ['USD']);

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
  payload: new web3.eth.Contract(ContractJson.abi, address),
});

export const fetchBalancesThunk = () => {
  return (dispatch, getState) => {
    const { exchangeAddress } = getState().token;
    dispatch(fetchBalances(exchangeAddress))
  }
}
export const fetchBalances = exchangeAddress => ({
  type: 'FETCH_BALANCES',
  payload: Promise.all([
    web3.eth.getBalance(exchangeAddress),
    web3.eth.getEnergy(exchangeAddress)])
});

export const fetchTickers = () => ({
  type: 'FETCH_TICKERS',
  payload: Promise.all([getVTHO(), getVET()]),
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



