import Web3 from "web3";
import { thorify } from 'thorify';
import axios from 'axios';

import ContractJson from "../build/contracts/exchange.json";

const address = "0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e";
const web3 = thorify(new Web3(), "http://127.0.0.1:8669/");
const Contract = new web3.eth.Contract(ContractJson.abi, address);

const vthoTicker = 'https://api.coinmarketcap.com/v2/ticker/3012/';
const vetTicker = 'https://api.coinmarketcap.com/v2/ticker/3077/';

const getVTHO = () => axios.get(vthoTicker);
const getVET = () => axios.get(vetTicker);

export const fetchBalances = () => ({
  type: 'FETCH_BALANCES',
  payload: Promise.all([
    web3.eth.getBalance(address),
    web3.eth.getEnergy(address)])
});

export const fetchTickers = () => ({
  type: 'FETCH_TICKERS',
  payload: axios.all([getVTHO(), getVET()]),
});

export const fetchFees = () => ({
  type: 'FETCH_FEES',
});

export const calculateVTHO = (val) => {
  const { getEthToTokenPrice } = Contract.methods;
  const num = web3.utils.toWei(val);

  return {
    type: 'CALCULATE_VTHO',
    payload: getEthToTokenPrice(num).call(),
    meta: { web3 },
  };
};

export const calculateVET = (val) => {
  const { getTokenToEthPrice } = Contract.methods;
  const num = web3.utils.toWei(val);

  return {
    type: 'CALCULATE_VET',
    payload: getTokenToEthPrice(num).call(),
    meta: { web3 },
  };
};



