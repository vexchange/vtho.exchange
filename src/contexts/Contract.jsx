import React, { createContext } from 'react';

import Exchange from '../contracts/exchange.json';
import ERC20 from '../contracts/erc20.json';

export const ContractContext = createContext();

function Contract({ children }) {

  return (
    <ContractContext.Provider value={{ Exchange, ERC20 }}>
      {children}
    </ContractContext.Provider>
  );
}

export default Contract;
