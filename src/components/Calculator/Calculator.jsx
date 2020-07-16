import React, { useEffect, useContext, useState } from 'react';
import { Box, Text } from 'rebass';
import { Input } from '@rebass/forms';
import { find } from 'lodash';
import { ethers } from "ethers";

import { ContractContext } from '../../contexts/Contract';

function Calculator({ token }) {
  const { Exchange } = useContext(ContractContext);
  const [ethToTokenInput, setEthToTokenInput] = useState();
  const [ethToTokenOutput, setEthToTokenOutput] = useState('0');

  const [tokenToEthInput, setTokenToEthInput] = useState();
  const [tokenToEthOutput, setTokenToEthOutput] = useState('0');

  useEffect(() => {
    const abi = find(Exchange, { name: 'getEthToTokenInputPrice' })
    const method = window.connex.thor.account(token.exchange).method(abi);

    if (ethToTokenInput) {
      method.call(ethToTokenInput).then(({ decoded }) => {
        let num = ethers.utils.formatEther(decoded.out).toString();
        num = parseFloat(num).toFixed(2);
        setEthToTokenOutput(num);
      });
    }
  }, [ ethToTokenInput ]);

  useEffect(() => {
    const abi = find(Exchange, { name: 'getTokenToEthInputPrice' })
    const method = window.connex.thor.account(token.exchange).method(abi);

    if (tokenToEthInput) {
      method.call(tokenToEthInput).then(({ decoded }) => {
        let num = ethers.utils.formatEther(decoded.out).toString();
        num = parseFloat(num).toFixed(2);
        setTokenToEthOutput(num);
      });
    }
  }, [ tokenToEthInput ]);

  const ethToTokenInputAmount = e => {
    if (e.target.value.length) {
      const num = ethers.utils.parseUnits(e.target.value).toString();
      setEthToTokenInput(num);
    } else {
      setEthToTokenOutput('0');
    }
  };

  const tokenToEthInputAmount = e => {
    if (e.target.value.length) {
      const num = ethers.utils.parseUnits(e.target.value).toString();
      setTokenToEthInput(num);
    } else {
      setTokenToEthOutput('0');
    }
  };

  return (
    <>
      <Box
        sx={{
          marginTop: '40px',
        }}
      >
        <Text
          sx={{
            marginBottom: '10px',
            textTransform: 'uppercase'
          }}
        >
          VET to { token.symbol }
        </Text>
          <Input
            id='vet'
            name='vet'
            type='number'
            placeholder="Enter VET Amount"
            onChange={ethToTokenInputAmount}
            sx={{
              textAlign: 'right',
            }}
          />
          <Text
            fontSize={[2, 3]}
            fontFamily="monospace"
            sx={{
              textAlign: 'right',
              marginTop: '10px'
            }}
          >
            {ethToTokenOutput} { token.symbol }
          </Text>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
        }}
      >
        <Text
          sx={{
            marginBottom: '10px',
            textTransform: 'uppercase'
          }}
        >
          { token.symbol } to VET
        </Text>
        <Input
          id='vtho'
          name='vtho'
          type='number'
          placeholder={`Enter ${token.symbol} Amount`}
          onChange={tokenToEthInputAmount}
          sx={{
            textAlign: 'right',
          }}
        />
        <Text
          fontSize={[2, 3]}
          fontFamily="monospace"
          sx={{
            textAlign: 'right',
            marginTop: '10px'
          }}
        >
          {tokenToEthOutput} VET
        </Text>
      </Box>
    </>
  );
}

export default Calculator;
