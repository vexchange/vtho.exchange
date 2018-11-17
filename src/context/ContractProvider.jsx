import React, { Component, createContext } from 'react';
import Web3 from "web3";
import { thorify } from "thorify";

import ContractJson from "../build/contracts/exchange.json";

const web3 = thorify(new Web3(), "http://127.0.0.1:8669/");
const address = "0x534BD48d7CfB0602EA3708cfdDacFeb2242c843e";
const Contract = new web3.eth.Contract(ContractJson.abi, address);

const ContractContext = createContext();

export class ContractProvider extends Component {
  render() {
    return (
      <ContractContext.Provider value={Contract}>
        { this.props.children }
      </ContractContext.Provider>
    )
  }
}

export const ContractContextConsumer = ContractContext.Consumer;

