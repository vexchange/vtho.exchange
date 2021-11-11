import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from '@emotion/styled';
import ClipboardJS from 'clipboard';
import { useTheme } from 'emotion-theming';
import QRCode from 'qrcode';
import { isMobile } from "react-device-detect";
import { useParams, useHistory } from "react-router-dom";

import tokens from '../../constants/tokens.json';

import TokenSelector from '../../components/TokenSelector';

const Canvas = styled.canvas`
  cursor: pointer;
  text-align: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;
  height: 300px;
  font-size: 3rem;
  margin: 0;
  margin-left: 20px;

  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0 34px;
  position: relative;

  &::after {
    content: "exchange";
    font-size: 0.7rem;
    left: 7px;
    bottom: 0;
    writing-mode: horizontal-tb;
    text-orientation: sideways;
    position: absolute;
  }

`;

const CanvasWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Token() {
  const theme = useTheme();
  const params = useParams();
  const history = useHistory();
  const ref = useRef(null);
  const [token, setToken] = useState(tokens[params.token.toUpperCase()]);

  const onTokenSelect = selectedToken => {
    history.push(selectedToken.symbol)
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(ref.current);

    clipboard.on('success', (e) => {
      alert('copied');
      e.clearSelection();
    });

  }, []);

  useEffect(() => {
    QRCode.toCanvas(ref.current, tokens[params.token.toUpperCase()].address, {
      width: isMobile ? 250 : 300,
      margin: 0,
      color: {
        dark: theme.colors.primary,
        light: theme.colors.background,
      }
    });

    setToken(tokens[params.token.toUpperCase()]);
  }, [ params, theme.colors ]);

  return (
    <div>
      <Box
        sx={{
          marginBottom: '20px'
        }}
      >
        <Box
          sx={{
            display: 'inline-block'

          }}
        >
        </Box>
        <Flex
          alignItems="center"
          flexDirection={isMobile ? 'column' : 'row'}
        >
          <CanvasWrapper>
            <Canvas
              ref={ref}
              data-clipboard-text={token.address} />
          </CanvasWrapper>
          {!isMobile ? <Title>{ token.symbol }</Title> : null }
        </Flex>
        
        <Text
          isMobile={isMobile}
          sx={{
            fontWeight: 'bold',
            fontSize: '0.85rem',
            margin: '20px 0',
            wordBreak: 'break-all',
            letterSpacing: '0.09rem',
            color: theme.colors.primary
          }}>
          { tokens[params.token.toUpperCase()].address }
        </Text>
      </Box>
      <Flex mx={-2}>
        <Box width={2/12} px={2}>
        <TokenSelector
          onTokenSelect={onTokenSelect}
          selectedToken={token}
          tokens={tokens}
        />
        </Box>
        <Box width={10/12} px={2}>
          <ol>
            <li>Select VET or any VIP180 token in your VeChain mobile wallet and press transfer.</li>
            <li>Open the QR code scanner (top right corner) and scan the QR code to the right.</li>
            <li>Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.</li>
          </ol>
          <ul>
            <li>
              <small>Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.</small>
            </li>
            <li>
              <small>Price changes with trade size, keep your trades below %3 of the staked assets you see in the top bar.</small>
            </li>
            <li>
              <small>Do not send funds directly from an exchange.</small>
            </li>
          </ul>
          <Text sx={{ marginTop: '30px' }}>
            <small>
              Got any issues? Join our <a href="https://discord.gg/bzvUNqTENp" target="_blank" rel="noopener noreferrer">Discord</a>
            </small>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Token;
